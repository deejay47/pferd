import React from "react";
import { Row, Col } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.scss";

function ItemListContainer() {
  return (
    <div>
      <Row className="justify-content-center">
          <Col xs="12" sm="8" md="12" lg="12" xl="8">
            <ItemList></ItemList>
          </Col>
      </Row>
    </div>
  );
}

export default ItemListContainer;
