import { React, useState, useEffect } from "react";
import { Row, Button, Modal } from "react-bootstrap";
import Loading from "../Loading/Loading";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";
import {
  Trash,
  ChevronDoubleRight,
  ChevronDoubleLeft,
} from "react-bootstrap-icons";
import Toastr from "../Toastr/Toastr";

import "./CartList.scss";
import CheckoutStepper from "../CheckoutStepper/CheckoutStepper";

function CartList() {
  const cart = useCart();
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [deletedToastr, setDeletedToastr] = useState(false);
  const [clearToastr, setClearToastr] = useState(false);
  const numberFormat = new Intl.NumberFormat("de-DE");

  useEffect(() => {
    setLoading(false);
  }, []);

  const emptyCart = function () {
    cart.clear();
    setClearToastr(true);
  };

  const deleteItem = function () {
    setDeletedToastr(true);
  };

  const toastrReset = () => {
    setDeletedToastr(false);
    setClearToastr(false);
  };

  return (
    <div>
      {deletedToastr ? (
        <Toastr
          show={deletedToastr}
          title="Eliminado"
          content="Producto quitado de tu carrito."
          variant="warning"
          delay={2000}
          onClose={toastrReset}
        ></Toastr>
      ) : (
        ""
      )}
      {clearToastr ? (
        <Toastr
          show={clearToastr}
          title="Carrito vaciado"
          content="Se eliminaron los productos de tu carrito."
          variant="error"
          delay={2500}
          onClose={toastrReset}
        ></Toastr>
      ) : (
        ""
      )}
      {loading ? (
        <Loading></Loading>
      ) : cart.cart.items[0] ? (
        <Row className="justify-content-md-center fade-in">
          <CheckoutStepper active={0}></CheckoutStepper>
          <div className="cart_section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="cart_container fade-in">
                    <div className="cart_title">Tu carrito</div>
                    <div className="cart_items">
                      <ul className="cart_list">
                        {cart.cart.items[0]
                          ? cart.cart.items?.map((item) => (
                              <CartItem
                                item={item}
                                key={item.item.id}
                                onDelete={deleteItem}
                              ></CartItem>
                            ))
                          : ""}
                      </ul>
                    </div>

                    <div className="order_total">
                      <div className="order_total_content text-end">
                        <Button
                          onClick={handleShow}
                          variant="outline-danger"
                          size="sm"
                          title="Vaciar carrito"
                          className="empty-button"
                        >
                          <Trash></Trash> Vaciar carrito
                        </Button>

                        <div className="order_total_title">
                          Total ({cart.cart.totalItems} productos):
                        </div>
                        <div className="order_total_amount">
                          $ {numberFormat.format(cart.cart.totalPrice)}
                        </div>
                      </div>
                    </div>

                    <div className="cart_buttons">
                      <Button
                        type="button"
                        as={Link}
                        to="/"
                        variant="outline-primary"
                        className="button shop-button"
                      >
                        <ChevronDoubleLeft size="25"></ChevronDoubleLeft>{" "}
                        Continuar comprando
                      </Button>

                      <Button
                        type="button"
                        as={Link}
                        to="/checkout"
                        variant="outline-success"
                        className="button"
                      >
                        Finalizar compra
                        <ChevronDoubleRight size="25"></ChevronDoubleRight>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Modal show={show}>
            <Modal.Header>
              <Modal.Title>¿Seguro?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Vaciar carrito?</Modal.Body>
            <Modal.Footer>
              <Button variant="outline-secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="outline-danger" onClick={emptyCart}>
                Eliminar
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
      ) : (
        <div className="empty-cart text-center fade-in">
          <h4>Tu carrito está vacío.</h4>

          <Button
            type="button"
            as={Link}
            to="/"
            variant="primary"
            className="text-center"
          >
            Ir a la tienda
          </Button>
        </div>
      )}
    </div>
  );
}

export default CartList;
