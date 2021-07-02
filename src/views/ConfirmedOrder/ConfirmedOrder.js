import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import CreatedOrderConfirm from "../../components/CreatedOrderConfirm/CreatedOrderConfirm";
import CheckoutStepper from "../../components/CheckoutStepper/CheckoutStepper";
import { getFirestore } from "../../firebase/index";

import "./ConfirmedOrder.scss";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

function ConfirmedOrder(props) {
  const orderId = useParams();
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  //Buscar order por el id, evaluar su estado y setear una vista en función del mismo
  useEffect(() => {
    const db = getFirestore();
    const ordersCollection = db.collection("orders");

    orderId
      ? ordersCollection
          .doc(orderId.id)
          .get()
          .then((fetchedOrder) => {
            if (fetchedOrder.data()) {
              orderStatusCheck(fetchedOrder.data());
              setLoading(false);
            } else {
              setRedirect(true);
            }
          })
      : setRedirect(true);
    // eslint-disable-next-line
  }, []);

  const orderStatusCheck = (data) => {
    console.log();

    switch (data.status) {
      case "CREATED":
        setActiveStep(2);
        setOrderData({
          orderId: orderId.id,
          title: "Ya falta menos, " + data.buyer.name + "!",
          subtitle: "Aún no hemos registrado el pago de tu compra.",
          content: "",
          action: {
            url: "/payment/" + orderId.id,
            text: "Pagar ($" + data.orderTotalPrice + ")",
            variant: "outline-success",
          },
        });
        break;
      case "PAID":
        setActiveStep(4);
        setOrderData({
          orderId: orderId.id,
          title: "¡Felicidades, " + data.buyer.name + "!",
          subtitle:
            "Tu compra está en camino a " + data.addresses.delivery.city + ".",
          content: "",
          action: {
            url: "/",
            text: "Volver al home",
            variant: "primary",
          },
        });
        break;
      default:
        setRedirect(true);
    }
  };

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="created-order-view fade-in">
          <Row>
            <CheckoutStepper active={activeStep}></CheckoutStepper>
            <CreatedOrderConfirm data={orderData}></CreatedOrderConfirm>
          </Row>
        </div>
      )}
      {redirect ? <Redirect to={"/order/invalid/" + orderId.id} /> : ""}
    </>
  );
}

export default ConfirmedOrder;
