import React from "react";
import { Container, Row} from "react-bootstrap";
import CartList from "../../components/CartList/CartList"

import './Cart.scss'

function Cart() {
  return (
    <div className="cart-view">
      
      <Container fluid="md" className="cart">
            <Row className="justify-content-md-center">

            <CartList></CartList>

            </Row>
        </Container>

    </div>
  );
}

export default Cart
