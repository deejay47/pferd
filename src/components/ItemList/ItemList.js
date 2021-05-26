import { React, useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Item from "../Item/Item";

import "./ItemList.scss";

function ItemList() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(function () {
        let products = [
          {
            id: 1,
            title: "producto 1",
            price: 1700,
            stock: 12,
            pictureUrl: "img/products/deflector_xm.jpeg",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum nisi in felis ultrices lacinia.",
          },
          {
            id: 2,
            title: "producto 2",
            price: 2000,
            stock: 16,
            pictureUrl:
            "img/products/deflector_xm.jpeg",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum nisi in felis ultrices lacinia.",
          },
          {
            id: 3,
            title: "producto 3",
            price: 1100,
            stock: 0,
            pictureUrl:
            "img/products/deflector_xm.jpeg",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum nisi in felis ultrices lacinia.",
          },
        ];
        resolve(products);
      }, 2000);
    });

    promise.then(
      function (res) {
        setItems(res);
      },
      function (err) {
        console.log("error: " + err);
      }
    );
  }, []);

  return (
    <Container fluid="md">
      <Row className="justify-content-md-center">
        {items?.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;
