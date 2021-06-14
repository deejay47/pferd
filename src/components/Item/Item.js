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
          <Card.Text>{props.item.description}</Card.Text>
          <p className="price-tag">$ {props.item.price}</p>
        </Card.Body>
      </Card>
  );
}

export default Item;
