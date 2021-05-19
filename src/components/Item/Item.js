import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import ProductImage from "../../assets/img/products/deflector_xm.jpeg";
import ItemCount from "../ItemCount/ItemCount";

import "./Item.scss";

class Item extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      item: props.item
    }
  }

  render() {
    return (
      <Col>
        <Card className="text-center">
          <Card.Img variant="top" src={ProductImage} />
          <Card.Body>
            <Card.Title>{this.state.item.name}</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              condimentum nisi in felis ultrices lacinia.
            </Card.Text>
              <p className="price-tag">$ {this.state.item.price}</p>
                <ItemCount stock={this.state.item.stock}></ItemCount>
            <Button variant="primary" value={this.state.item.id} disabled={this.state.item.stock === 0}>{this.state.item.stock !== 0 ? "Agregar al carrito" : "Sin stock" }</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Item;
