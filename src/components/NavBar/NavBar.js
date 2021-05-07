import React from "react";
import Logo from '../../assets/logo.png'
import {Nav, NavDropdown, Navbar } from "react-bootstrap";

import "./NavBar.scss";

class NavBar extends React.Component {
  render() {
    return (
<Navbar bg="light" expand="md">
  <Navbar.Brand href="#home">
    <img className='brand-logo' src={Logo} alt="Pferd Logo" />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav.Link href="#link">Distribuidores</Nav.Link>
      <NavDropdown title="Categorías" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Deflectores</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Sistema Savage</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">CubreCárter</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Perimetrales</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    );
  }
}

export default NavBar;
