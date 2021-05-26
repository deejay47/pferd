import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

import "./Item.scss";


function Item(props) {

  const [quantity, setQuantity] = useState(Number)

  const quantityUpdate = (selectedQuantity) => {
    setQuantity(selectedQuantity)
    console.log(selectedQuantity);
  }

  return (
    <Col>
      <Card className="text-center">
        <Card.Img variant="top" src={props.item.pictureUrl} />
        <Card.Body>
          <Card.Title>{props.item.title}</Card.Title>
          <Card.Text>
            {props.item.description}
          </Card.Text>
          <p className="price-tag">$ {props.item.price}</p>
          <ItemCount stock={props.item.stock} onChange={quantityUpdate} selectedQuantity={quantity}></ItemCount>
          <Button variant="primary" value={props.item.id} disabled={props.item.stock === 0}>{props.item.stock !== 0 ? "Agregar al carrito" : "Sin stock"}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
