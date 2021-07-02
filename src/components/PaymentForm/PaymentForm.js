import React, { useEffect, useRef, useState } from "react";
import Card from "react-credit-cards";
import { useParams, Redirect } from "react-router-dom";
import { getFirestore } from "../../firebase/index";
import { Row } from "react-bootstrap";
import Loading from "../Loading/Loading";
import CheckoutStepper from "../CheckoutStepper/CheckoutStepper";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./utils";

import "react-credit-cards/es/styles-compiled.css";
import "./PaymentForm.scss";

function PaymentForm() {
  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focused, setFocus] = useState("");
  const [formData, setFormData] = useState(null);
  const [issuer, setIssuer] = useState("");
  const ref = useRef(null);
  const orderId = useParams();
  const [order, setOrder] = useState(null);
  const [redirect, setRedirect] = useState(null);
  const db = getFirestore();
  const ordersCollection = db.collection("orders");
  const itemsCollection = db.collection("items");

  const handleCallback = (issuer) => {
    setIssuer(issuer.issuer);
  };

  const handleInputFocus = ({ target }) => {
    setFocus(target.name);
  };

  const handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
      setNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
      setExpiry(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
      setCvc(target.value);
    } else if (target.name === "name") {
      setName(target.value);
    }
  };

  const paymentProcessing = (e) => {
    setFormData(
      [...e.target.elements]
        .filter((d) => d.name)
        .reduce((acc, d) => {
          acc[d.name] = d.value;
          return acc;
        }, {})
    );

    // TODO: Implementación de pasarela de pagos

    // Mock de pago exitoso
    const paymentResult = {
      orderId: order,
      paymentId: order,
      status: "succeded",
      cardData: formData,
    };

    return paymentResult;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (paymentProcessing(e).status === "succeded") {
      //Guardar estado de orden
      ordersCollection
        .doc(orderId.id)
        .update({ status: "PAID" })
        .then((fetchedOrder) => {
          order.orderedItems.forEach((orderedItem) => {
            itemsCollection
              .where("id", "==", orderedItem.id)
              .get()
              .then((fetchedItem) => {
                itemsCollection
                  .doc(fetchedItem.docs[0].id)
                  .update({
                    stock:
                      fetchedItem.docs[0].data().stock - orderedItem.quantity,
                  });
              });
          });
          setRedirect("order");
        });
    }
    //Reintentar pago
    //TODO: Enviar comprobante de pago incompleto
    setRedirect("payment");
  };

  useEffect(() => {
    orderId
      ? ordersCollection
          .doc(orderId.id)
          .get()
          .then((fetchedOrder) => {
            if (fetchedOrder.data()) {
              if (fetchedOrder.data().status === "PAID") {
                setRedirect("order");
              }
              setOrder(fetchedOrder.data());
              setName(
                fetchedOrder.data().buyer.name +
                  " " +
                  fetchedOrder.data().buyer.lastname
              );
              setLoading(false);
            } else {
              setRedirect("invalid");
            }
          })
      : setRedirect("invalid");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {redirect ? <Redirect to={"/" + redirect + "/" + orderId.id} /> : ""}
      {loading ? (
        <Loading></Loading>
      ) : (
        <Row className="justify-content-md-center fade-in">
          <CheckoutStepper active={2}></CheckoutStepper>
          <div key="Payment">
            <div className="App-payment">
              <Card
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focused}
                callback={handleCallback}
                locale={{ valid: "Válida hasta" }}
                placeholders={{ name: "Nombre del titular" }}
              />
              <form className="payment-form" ref={ref} onSubmit={handleSubmit}>
                <div className="form-group col-md-12 mb-3">
                  <input
                    type="tel"
                    name="number"
                    className="form-control"
                    placeholder="Número de tarjeta"
                    pattern="[\d| ]{16,22}"
                    required
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </div>
                <div className="form-group col-md-12 mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre del titular"
                    required
                    value={name}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </div>

                <div className="row payment-row">
                  <div className="form-group col-md-6 mb-3">
                    <input
                      type="tel"
                      name="expiry"
                      className="form-control"
                      placeholder="Válida hasta"
                      pattern="\d\d/\d\d"
                      required
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    />
                  </div>
                  <div className="form-group col-md-6 mb-3">
                    <input
                      type="tel"
                      name="cvc"
                      className="form-control"
                      placeholder="CVC"
                      pattern="\d{3,4}"
                      required
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    />
                  </div>
                </div>

                <input type="hidden" name="issuer" value={issuer} />
                <div className="">
                  <button className="btn btn-outline-success btn-block payment-button">
                    Pagar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Row>
      )}
    </>
  );
}

export default PaymentForm;
