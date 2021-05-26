import React from "react";
import { Cart } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

import "./CartWidget.scss";

function CartWidget() {
    return (
        <Button size="sm" variant="outline-dark">
          <Cart size={25}/>
        </Button>
    );
  }

export default CartWidget;
