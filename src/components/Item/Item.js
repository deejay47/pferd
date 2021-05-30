import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

import "./Item.scss";

function Item(props) {
  const [quantity, setQuantity] = useState(Number);

  const quantityUpdate = (selectedQuantity) => {
    setQuantity(selectedQuantity);
    console.log(selectedQuantity);
  };

  return (
      <Card className="text-center">
        <Card.Body>
          <Card.Title className="container" as={Link} to={"/item/" + props.item.id}>
            <Card.Img variant="top" src={props.item.pictureUrl} className="image" />
            <div className="overlay">
              <div className="text">Más detalles...</div>
            </div>
          </Card.Title>
          <Card.Title>{props.item.title}</Card.Title>
          <p className="price-tag">$ {props.item.price}</p>
          <ItemCount
            stock={props.item.stock}
            onChange={quantityUpdate}
            selectedQuantity={quantity}
          ></ItemCount>
          <Button
            variant="primary"
            value={props.item.id}
            disabled={props.item.stock === 0}
          >
            {props.item.stock !== 0 ? "Agregar al carrito" : "Sin stock"}
          </Button>
        </Card.Body>
      </Card>
  );
}

export default Item;
