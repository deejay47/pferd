import { React, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import Logo from "../../assets/img/logos/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import Loading from "../Loading/Loading";
import Inventory from "../../assets/data/inventory.json";
import { useCart } from "../../contexts/cartContext"


import "./NavBar.scss";

function NavBar() {

  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(null);
  const cart = useCart()

  useEffect(() => {
    const getCategories = new Promise((resolve) => {
      setTimeout(() => resolve(Inventory.categories), 1000);
    });

    getCategories.then((res) => {
      setCategories(res);
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
              ) : 
                categories != null ? (
                  categories.map((category) => 
                  <NavDropdown.Item key={category.id} as={NavLink} to={"/category/" + category.id} activeClassName="active">
                    {category.name}
                  </NavDropdown.Item>)
                ) : (
                  <NavDropdown.Item as={Link} to="/">
                    Error al obtener categorías
                  </NavDropdown.Item>
                )}
            </NavDropdown>

            <NavDropdown title={<CartWidget className="float-right"></CartWidget>} id="cart-dropdown">
             
              {loading ? (
                <Loading></Loading>
              ) : 
              cart.items !== undefined ? (
                  cart.items.map((cartItem) => 
                  <NavDropdown.Item key={cartItem.id}>
                    {cartItem.name}
                  </NavDropdown.Item>
                  )
                ) : (
                  <NavDropdown.Item as={Link}  to="/cart">
                    Items en carrito: {cart.cart.items.length}
                  </NavDropdown.Item>
                )}

            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  );
}

export default NavBar;
