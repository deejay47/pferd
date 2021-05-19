import React from "react";
import { Card, Button, Col } from "react-bootstrap";
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
          <Card.Img variant="top" src={this.state.item.pictureUrl} />
          <Card.Body>
            <Card.Title>{this.state.item.title}</Card.Title>
            <Card.Text>
            {this.state.item.description}
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
