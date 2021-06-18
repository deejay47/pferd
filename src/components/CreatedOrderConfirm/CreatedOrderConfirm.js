import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./CreatedOrderConfirm.scss";

function CreatedOrderConfirm(props) {
  return (
    <Container fluid="md" className="created-order-confirm">
      <Row className="justify-content-md-center">
        <div className="empty-cart text-center fade-in">
          <h2> ¡Felicidades! tu compra está en camino  </h2>
         <hr/>
          <h4> Tus productos están siendo preparados, te los enviaremos cuanto antes</h4>
          <h6> Orden # <strong>{props.orderId}</strong></h6>
          <br/>
          <Button
            type="button"
            as={Link}
            to="/"
            variant="primary"
            className="text-center"
          >
            Volver al home
          </Button>
        </div>
      </Row>
    </Container>
  );
}

export default CreatedOrderConfirm;
