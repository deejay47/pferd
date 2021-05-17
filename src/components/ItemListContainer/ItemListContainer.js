import React from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import ProductImage from '../../assets/img/products/deflector_xm.jpeg'

import "./ItemListContainer.scss";

class ItemListContainer extends React.Component {

  constructor(props){
    super(props);
    this.saludo = props.saludo
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

        <Col>
          <Card>
            <Card.Img variant="top" src={ProductImage} />
            <Card.Body>
              <Card.Title>Producto</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum nisi in felis ultrices lacinia.
              </Card.Text>
              <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={ProductImage} />
            <Card.Body>
              <Card.Title>Producto</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum nisi in felis ultrices lacinia.
              </Card.Text>
              <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={ProductImage} />
            <Card.Body>
              <Card.Title>Producto</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum nisi in felis ultrices lacinia.
              </Card.Text>
              <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={ProductImage} />
            <Card.Body>
              <Card.Title>Producto</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum nisi in felis ultrices lacinia.
              </Card.Text>
              <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
    );
  }
}

export default ItemListContainer;
