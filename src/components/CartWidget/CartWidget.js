import React from "react";
import { Cart } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

import "./CartWidget.scss";

class CartWidget extends React.Component {
  render() {
    return (
        <Button size="sm" variant="outline-dark">
          <Cart size={25}/>
        </Button>
    );
  }
}

export default CartWidget;
