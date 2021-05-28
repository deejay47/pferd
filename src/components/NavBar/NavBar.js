import React from "react";
import Logo from '../../assets/img/logos/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import {Nav, NavDropdown, Navbar } from "react-bootstrap";

import "./NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
    return (
<Navbar bg="light" expand="md" className="navBar">
  <Navbar.Brand href="#home">
    <img className='brand-logo' src={Logo} alt="Pferd Logo" />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link to="/">Inicio</Link>
      <Nav.Link href="#link">Distribuidores</Nav.Link>
      <NavDropdown title="Categorías" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Deflectores</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Sistema Savage</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">CubreCárter</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Perimetrales</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link><CartWidget className="float-right"></CartWidget></Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    );
  }

export default NavBar;
