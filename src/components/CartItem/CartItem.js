import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { useCart } from "../../contexts/cartContext";

import "./CartItem.scss";

function CartItem(props) {
  const cart = useCart();

  const numberFormat = new Intl.NumberFormat("de-DE");

  const removeItem = function () {
    cart.removeItem(props.item.item.id);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <li className="cart_item clearfix" key={props.item.item.id}>
      <div className="cart_item_image">
        <img src={"/img/products/" + props.item.item.pictureUrl} alt="" />
      </div>
      <div className="cart_item_info d-flex flex-md-row justify-content-between">
        <div className="cart_item_name cart_info_col">
          <div className="cart_item_title">Producto</div>
          <div className="cart_item_text">{props.item.item.title}</div>
        </div>
        <div className="cart_item_quantity cart_info_col">
          <div className="cart_item_title">Cantidad</div>
          <div className="cart_item_text text-center">
            {props.item.quantity}
            <Button
              onClick={handleShow}
              variant="outline-danger"
              size="sm"
              className="delete-button"
            >
              <Trash></Trash>
            </Button>
          </div>
        </div>
        <div className="cart_item_price cart_info_col">
          <div className="cart_item_title">Precio</div>
          <div className="cart_item_text">
            $ {numberFormat.format(props.item.item.price)}
          </div>
        </div>
        <div className="cart_item_total cart_info_col">
          <div className="cart_item_title">Sub-total</div>
          <div className="cart_item_text">
            $ {numberFormat.format(props.item.quantity * props.item.item.price)}
          </div>
        </div>
      </div>

      <Modal animation="false" show={show}>
        <Modal.Header>
          <Modal.Title>¿Seguro?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Quitar {props.item.item.title} del carrito?</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="outline-danger" onClick={removeItem}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </li>
  );
}

export default CartItem;
