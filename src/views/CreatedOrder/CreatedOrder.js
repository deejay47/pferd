import React from "react";
import { Container, Row} from "react-bootstrap";
import CreatedOrderConfirm from "../../components/CheckoutForm/CheckoutForm"

import './CreatedOrder.scss'

function CreatedOrder(props) {
  return (
    <div className="created-order-view">
      
      <Container fluid="md" className="cart">
            <Row className="justify-content-md-center">

            <CreatedOrderConfirm orderId={props.orderId}></CreatedOrderConfirm>

            </Row>
        </Container>

    </div>
  );
}

export default CreatedOrder
