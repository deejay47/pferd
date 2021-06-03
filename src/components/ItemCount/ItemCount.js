import { useState } from "react";
import { ListGroup, InputGroup, FormControl, Button } from "react-bootstrap";
import { Dash, Plus } from "react-bootstrap-icons";

import "./ItemCount.scss";

function ItemCount({ stock, selectedQuantity, onChange }) {

  const [quantity, setQuantity] = useState(selectedQuantity)

  const quantityIncrease = function () {
    setQuantity(quantity + 1)
      onChange(quantity + 1)
  }

  const quantityDecrease = function () {
    setQuantity(quantity - 1)
    onChange(quantity - 1)
  }

  return (
    <ListGroup xs="auto" variant="flush" className="item-counter">
      <ListGroup.Item>
        <InputGroup className="mb-4">
          <InputGroup.Prepend
            title={quantity < 1 ? "¬¬" : "Quitar una unidad"}>
            <Button variant="outline-danger" onClick={quantityDecrease} disabled={quantity < 1}>
              <Dash size={25} />
            </Button>

          </InputGroup.Prepend>
          <FormControl
            aria-label="Items Quantity"
            value={quantity}
            className="text-center"
            max={stock}
            readOnly />
          <InputGroup.Append title={quantity >= stock ? "Stock insuficiente" : "Agregar una unidad"}>
            <Button variant="outline-success" onClick={quantityIncrease} disabled={quantity >= stock}>
              <Plus size={25} />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ItemCount;
