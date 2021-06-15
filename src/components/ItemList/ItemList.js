import { React, useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Item from "../Item/Item";
import Loading from "../Loading/Loading";
import Inventory from "../../assets/data/inventory.json";
import NotFound from "../../views/NotFound/NotFound"
import { useParams } from "react-router-dom";

import "./ItemList.scss";

function ItemList() {
  const { id } = useParams();
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getItems = new Promise((resolve) => {
      setTimeout(() => resolve(Inventory.products), 1000);
    });

    id
      ? getItems.then((res) => {
          let allItems = res;
          let filteredItems = allItems.filter(
            (item) => Number(item.category_id) === Number(id)
          );
          setItems(filteredItems);
          setLoading(false);
        })
      : getItems.then((res) => {
          setItems(res);
          setLoading(false);
        });



  }, [id]);

  return (
    <Container fluid="md">
      {loading ? (
        <Loading></Loading>
      ) : (
        <Row className="justify-content-md-center fade-in">
          {items[0]
            ? items?.map((item) => 
            <Col key={item.id} md="4">
                  <Item item={item}></Item>
            </Col>
            )
            : <NotFound></NotFound>
          }
        </Row>
      )}
    </Container>
  );
}

export default ItemList;
