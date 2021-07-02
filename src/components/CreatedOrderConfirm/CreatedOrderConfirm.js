import React from "react";
import { Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./CreatedOrderConfirm.scss";

function CreatedOrderConfirm(props) {
  return (
    <div className="created-order-confirm">
      <Row className="justify-content-md-center">
        <div className="text-center fade-in">
          <h1> {props.data.title} </h1>
          <h3> {props.data.subtitle} </h3>
          <hr/>
          <h4> {props.data.content} </h4>
          <h6> Orden # <strong>{props.data.orderId}</strong></h6>
          <br/>
          <Button
            type="button"
            as={Link}
            to={props.data.action.url}
            variant={props.data.action.variant}
            className="text-center"
          >
            {props.data.action.text}
          </Button>
        </div>
      </Row>
    </div>
  );
}

export default CreatedOrderConfirm;
