import { React, useState, useEffect } from "react";
import { Container, Row, Button, Modal } from "react-bootstrap";
import Loading from "../Loading/Loading";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";

import "./CartList.scss";
import { Trash } from "react-bootstrap-icons";

function CartList() {
  const cart = useCart();
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const numberFormat = new Intl.NumberFormat("de-DE");

  useEffect(() => {
    setLoading(false);
  }, []);

  const emptyCart = function () {
    cart.clear();
  };

  return (
    <Container fluid="md">
      {loading ? (
        <Loading></Loading>
      ) : cart.cart.items[0] ? (
        <Row className="justify-content-md-center fade-in">
          <div className="cart_section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="cart_container fade-in">
                    <div className="cart_title">Detalle de tu compra</div>
                    <div className="cart_items">
                      <ul className="cart_list">
                        {cart.cart.items[0] ? (
                          cart.cart.items?.map((item) => (
                            <CartItem item={item} key={item.item.id}></CartItem>
                          ))
                        ) : (
                          ""
                        )}
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
                          <Trash></Trash>
                           {" "} Vaciar carrito
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
                        Continuar comprando
                      </Button>

                      <Button
                        type="button"
                        as={Link}
                        to="/checkout"
                        variant="outline-dark"
                        className="button"
                      >
                        Proceder al pago
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
          <h4>Tu carrito está vacío</h4>

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
    </Container>
  );
}

export default CartList;
