import { React, useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../contexts/cartContext";

import "./ItemDetail.scss";

function ItemDetail(props) {
  const cart = useCart();

  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [checkoutReady, setCheckoutReady] = useState(false);

  const quantityUpdate = (selectedQuantity) => {
    setSelectedQuantity(selectedQuantity);
  };

  const addToCart = () => {
    cart.addItem({ item: props.item, quantity: selectedQuantity });
    setCheckoutReady(true);
  };

  const numberFormat = new Intl.NumberFormat("de-DE");

  return (
    <Col sm="9">
      <Card className="text-center fade-in">
        <Card.Img
          className="detail-img"
          variant="top"
          src={"/img/products/" + props.item.pictureUrl}
        />
        <Card.Body>
          <Card.Title>
            <h2>{props.item.title}</h2>
          </Card.Title>
          <Card.Text className="description-text">
            {props.item.description}
          </Card.Text>
          <p className="price-tag">$ {numberFormat.format(props.item.price)}</p>

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
              className="item-count"
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
                variant="primary"
                disabled={props.item.stock === 0 || selectedQuantity === 0}
                onClick={addToCart}
              >
                {props.item.stock !== 0 ? "Agregar al carrito" : "Sin stock"}
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ItemDetail;
