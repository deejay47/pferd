import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

import "./ItemDetail.scss";

function ItemDetail(props) {

  return (
    <Col>
      <Card className="text-center">
        <Card.Img className="detail-img" variant="top" src={props.item.pictureUrl} />
        <Card.Body>
          <Card.Title>
            <h2>{props.item.title}</h2>
          </Card.Title>
          <Card.Text>
          {props.item.description}
          </Card.Text>
          <p className="price-tag">$ {props.item.price}</p>
          <div className="item-count">
          <ItemCount  stock={props.item.stock}></ItemCount>
          </div>
          {/* TODO: Dibujar botón sólo si el quantity es mayor a 0 */}
          <Button variant="primary" value="" disabled={props.item.stock === 0}>Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ItemDetail;
