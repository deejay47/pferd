import { React, useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../contexts/cartContext";
import Toastr from "../Toastr/Toastr";

import "./ItemDetail.scss";

function ItemDetail(props) {
  const cart = useCart();
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [checkoutReady, setCheckoutReady] = useState(false);
  const [toastr, setToastr] = useState(false);

  const quantityUpdate = (selectedQuantity) => {
    setSelectedQuantity(selectedQuantity);
  };

  const addToCart = () => {
    cart.addItem({ item: props.item, quantity: selectedQuantity });
    setToastr(true);
    setCheckoutReady(true);
  };

  const toastrReset = () => {setToastr(false)}

  const numberFormat = new Intl.NumberFormat("de-DE");

  return (
    <Col sm="12" md="12" lg="10">
      <Card className="fade-in">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
            <Card.Img
              className="detail-img"
              variant="top"
              src={"/img/products/" + props.item.pictureUrl}
            />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center">
            <Card.Body className="item-body">
              <Card.Title>
                <h2>{props.item.title}</h2>
              </Card.Title>
              <small className="description-text">
                {props.item.description}
              </small>
              <p className="price-tag">
                $ {numberFormat.format(props.item.price)}
              </p>

              {checkoutReady ? (
                <Button
                  as={Link}
                  to="/cart"
                  variant="outline-success"
                  disabled={props.item.stock === 0}
                >
                  Producto agregado! Ver mi carrito
                </Button>
              ) : (
                <div
                  className="item-count col-12 col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-8 "
                  title={
                    selectedQuantity === 0
                      ? "Seleccione cantidad válida"
                      : "Agregar al carrito"
                  }
                >
                  <ItemCount
                    stock={props.item.stock}
                    onChange={quantityUpdate}
                    selectedQuantity={selectedQuantity}
                  ></ItemCount>

                  <Button
                    variant="success"
                    disabled={props.item.stock === 0 || selectedQuantity === 0}
                    onClick={addToCart}
                  >
                    {props.item.stock !== 0
                      ? "Agregar al carrito"
                      : "Sin stock"}
                  </Button>
                </div>
              )}
            </Card.Body>
          </div>
        </div>
      </Card>
      {toastr ? (
        <Toastr
          show={toastr}
          title="¡Excelente elección!"
          content="Producto agregado a tu carrito."
          variant="success"
          delay={2000}
          onClose={toastrReset}
        ></Toastr>
      ) : (
        ""
      )}
    </Col>
  );
}

export default ItemDetail;
