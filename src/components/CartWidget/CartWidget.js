import React from "react";
import { Cart } from "react-bootstrap-icons";
import { Badge } from "react-bootstrap";

import "./CartWidget.scss";

function CartWidget(props) {
    return (
      <div>
        <Cart size={30}></Cart>
        <Badge variant="warning">{props.quantity}</Badge>
      </div>
      
    );
  }

export default CartWidget;
