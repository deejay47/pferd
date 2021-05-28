import React, { useState, useEffect } from "react";
import { Card, Button, Col } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import Loading from "../Loading/Loading"

import "./ItemDetail.scss";

function ItemDetail(props) {

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(0)

  const quantityUpdate = (selectedQuantity) => {
    setQuantity(selectedQuantity)
    console.log(selectedQuantity);
  }

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(function () {
        let product =
        {
          id: 1,
          title: "producto 1",
          price: 1700,
          stock: 6,
          pictureUrl: "/img/products/deflector_xm.jpeg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum nisi in felis ultrices lacinia.",
        }
        resolve(product);
      }, 2000);
    });

    promise.then(
      function (res) {
        setProduct(res);
        setLoading(false)
      },
      function (err) {
        console.log("error: " + err);
      }
    );
  }, []);

  return (
    <Col>
      {loading ? (
        <Loading></Loading>
      ) : (
        <Card className="text-center">
          <Card.Img className="detail-img" variant="top" src={product.pictureUrl} />
          <Card.Body>
            <Card.Title>
              <h2>{product.title}</h2>
            </Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
            <p className="price-tag">$ {product.price}</p>
            <div className="item-count">
            <ItemCount stock={product.stock} onChange={quantityUpdate} selectedQuantity={product.stock === 0 ? 0 : quantity}></ItemCount>
            </div>
          <Button variant="primary" value={product.id} disabled={product.stock === 0}>{product.stock !== 0 ? "Agregar al carrito" : "Sin stock"}</Button>
          </Card.Body>
        </Card>
      )}
    </Col>
  );
}

export default ItemDetail;
