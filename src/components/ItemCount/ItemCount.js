import { useState } from "react";
import { ListGroup, InputGroup, FormControl } from "react-bootstrap";
import { Dash, Plus } from "react-bootstrap-icons";

import "./ItemCount.scss";

function ItemCount(props){

  const [stock] = useState(props.stock)
  const [quantity, setQuantity] = useState(0)

  const quantityIncrease = function(){

    if (quantity + 1 <= stock){
      setQuantity(quantity + 1)
    }

  }

  const quantityDecrease = function(){

    if (quantity - 1 >= 0){
      setQuantity(quantity - 1)
    }

  }

    return (
      <ListGroup xs="auto" variant="flush">
        <ListGroup.Item>
          <InputGroup className="mb-4">
            <InputGroup.Prepend
              title="Restar">
              <InputGroup.Text className="btn btn-outline-danger" onClick={quantityDecrease}>
                <Dash size={25} />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Items Quantity"
              placeholder="0"
              value={quantity}
              className="text-center"
              max={stock}/>
            <InputGroup.Append title="Sumar">
              <InputGroup.Text className="btn btn-outline-success" onClick={quantityIncrease}>
                <Plus size={25}/>
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </ListGroup.Item>
      </ListGroup>
    );
  }

export default ItemCount;
