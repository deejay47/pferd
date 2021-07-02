import React from "react";
import { Row } from "react-bootstrap";
import CartList from "../../components/CartList/CartList";

import "./Cart.scss";

function Cart() {
  return (
    <div className="cart-view">
      <div className="cart">
        <Row className="justify-content-md-center">
          <CartList></CartList>
        </Row>
      </div>
    </div>
  );
}

export default Cart;
