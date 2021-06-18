import React from "react";
import { Container, Row} from "react-bootstrap";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm"

import './Checkout.scss'

function Checkout() {
  return (
    <div className="checkout-view">
      
      <Container fluid="md" className="cart">
            <Row className="justify-content-md-center">

            <CheckoutForm></CheckoutForm>

            </Row>
        </Container>

    </div>
  );
}

export default Checkout
