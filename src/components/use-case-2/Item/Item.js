import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Item.scss";

function Item(props) {
  const numberFormat = new Intl.NumberFormat("de-DE");
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title
          className="container"
          as={Link}
          to={"/item/" + props.item.id}
        >
          <Card.Img
            variant="top"
            src={"/img/products/" + props.item.pictureUrl}
            className="image"
          />
          <div className="overlay">
            <div className="text">Más detalles...</div>
          </div>
        </Card.Title>
        <Card.Title>{props.item.title}</Card.Title>
        <Card.Text>{props.item.description}</Card.Text>
        <p className="price-tag">$ {numberFormat.format(props.item.price)}</p>
      </Card.Body>
    </Card>
  );
}

export default Item;
