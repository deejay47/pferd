import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail";

import "./ItemDetailContainer.scss";

function ItemDetailContainer() {

  const [item, setItem] = useState(null);

  let product = {
      id: 1,
      title: "producto 100",
      price: 1400,
      stock: 12,
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_973872-MLA42541033919_072020-F.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum nisi in felis ultrices lacinia.",
    };

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(function () {
        let product =
          {
            id: 1,
            title: "producto 100",
            price: 1400,
            stock: 123,
            pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_973872-MLA42541033919_072020-F.webp",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum nisi in felis ultrices lacinia.",
          };
        resolve(product);
      }, 2000);
    });

    promise.then(
      function (res) {
        setItem(res);
      },
      function (err) {
        console.log("error: " + err);
      }
    );
  }, []);


  return (
    <Container fluid="md">
      <Row className="justify-content-md-center">

        <Row>
          <Col >
            <ItemDetail item={product}></ItemDetail>
          </Col>
        </Row>

      </Row>
    </Container>
  );
}

export default ItemDetailContainer;
