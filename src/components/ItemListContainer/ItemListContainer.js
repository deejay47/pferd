import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.scss";

function ItemListContainer() {

    return (
      <Container fluid="md">
      <Row className="justify-content-md-center">

        <Row>
          <Col >
            <h2>Listado de productos</h2>
          </Col>
        </Row>

       <ItemList></ItemList>

      </Row>
      </Container>
    );
  }

export default ItemListContainer;
