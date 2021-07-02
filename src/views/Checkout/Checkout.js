import React from "react";
import { Row } from "react-bootstrap";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

import "./Checkout.scss";

function Checkout() {
  return (
    <div className="checkout-view fade-in">
      <div className="cart">
        <Row className="justify-content-md-center">
          <CheckoutForm></CheckoutForm>
        </Row>
      </div>
    </div>
  );
}

export default Checkout;
