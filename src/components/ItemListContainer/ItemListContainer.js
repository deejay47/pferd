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
            <ItemList></ItemList>
          </Col>
        </Row>

      </Row>
    </Container>
  );
}

export default ItemListContainer;
