import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

import "./ItemDetail.scss";

function ItemDetail(props) {
  const [quantity, setQuantity] = useState(0);

  const quantityUpdate = (selectedQuantity) => {
    setQuantity(selectedQuantity);
    console.log(selectedQuantity);
  };

  return (
    <Col>
      <Card className="text-center fade-in">
        <Card.Img
          className="detail-img"
          variant="top"
          src={props.item.pictureUrl}
        />
        <Card.Body>
          <Card.Title>
            <h2>{props.item.title}</h2>
          </Card.Title>
          <Card.Text className="description-text">{props.item.description}</Card.Text>
          <p className="price-tag">$ {props.item.price}</p>
          <div className="item-count">
            <ItemCount
              stock={props.item.stock}
              onChange={quantityUpdate}
              selectedQuantity={props.item.stock === 0 ? 0 : quantity}
            ></ItemCount>
          </div>
          <Button
            variant="primary"
            value={props.item.id}
            disabled={props.item.stock === 0}
          >
            {props.item.stock !== 0 ? "Agregar al carrito" : "Sin stock"}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ItemDetail;
