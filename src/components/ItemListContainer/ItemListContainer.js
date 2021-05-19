import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Item from "../Item/Item";

import "./ItemListContainer.scss";

class ItemListContainer extends React.Component {

  constructor(props){

    super(props);
    
    // TODO: Hardcode de items
    this.items = [
      {id: 1, name: 'producto 1', price: 1700, stock: 12},
      {id: 2, name: 'producto 2', price: 2000, stock: 16},
      {id: 3, name: 'producto 3', price: 1100, stock: 0}
    ]

  }

  render() {
    return (
      <Container fluid="md">
      <Row className="justify-content-md-center">

        <Row>
          <Col >
            {this.saludo}
            <h2>Listado de productos</h2>
          </Col>
        </Row>

        {this.items?.map((item) => <Item key={item.id} item={item}></Item>)}

      </Row>
      </Container>
    );
  }
}

export default ItemListContainer;
