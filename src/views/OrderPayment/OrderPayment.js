import React from "react";
import { Row } from "react-bootstrap";
import PaymentForm from "../../components/PaymentForm/PaymentForm";

import "./OrderPayment.scss";

function OrderPayment(props) {
  return (
    <div className="order-payment-view">
        <Row>
          <PaymentForm orderId={props.orderId}></PaymentForm>
        </Row>
    </div>
  );
}

export default OrderPayment;
