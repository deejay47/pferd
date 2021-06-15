import { React, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import Logo from "../../assets/img/logos/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import Loading from "../Loading/Loading";
import { useCart } from "../../contexts/cartContext";
import { getFirestore } from "../../firebase/index";

import "./NavBar.scss";

function NavBar() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(null);
  const cart = useCart();

  useEffect(() => {
    const db = getFirestore();
    let categoriesCollection = db.collection("categories");

    categoriesCollection.get().then((snapshot) => {
      setCategories(snapshot.docs.map((doc) => doc.data()));
      setLoading(false);
    });
  }, []);

  return (
    <Row className="justify-content-md-center fade-in">
      <Navbar bg="light" expand="md" className="navBar">
        <Navbar.Brand>
          <Nav.Link as={Link} to="/">
            <img className="brand-logo" src={Logo} alt="Pferd Logo" />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/distribuidores">
              Distribuidores
            </Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              {loading ? (
                <Loading></Loading>
              ) : categories != null ? (
                categories.map((category) => (
                  <NavDropdown.Item
                    key={category.id}
                    as={NavLink}
                    to={"/category/" + category.id}
                    activeClassName="active"
                  >
                    {category.name}
                  </NavDropdown.Item>
                ))
              ) : (
                <NavDropdown.Item as={Link} to="/">
                  Error al obtener categorías
                </NavDropdown.Item>
              )}
            </NavDropdown>
            {cart.cart.items.length === 0 ? (
              ""
            ) : (
              <Nav.Link
                id="cart-widget"
                title="Ver carrito"
                as={Link}
                to="/cart"
              >
                <CartWidget
                  className="float-right"
                  quantity={cart.cart.totalItems}
                ></CartWidget>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  );
}

export default NavBar;
