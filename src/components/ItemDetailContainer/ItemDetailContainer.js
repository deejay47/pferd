import { React, useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Loading from "../Loading/Loading";
import ItemDetail from "../ItemDetail/ItemDetail";
import Inventory from "../../assets/data/inventory.json";
import NotFound from "../../views/NotFound/NotFound"
import { useParams } from "react-router-dom";

import "./ItemDetailContainer.scss";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItems = new Promise((resolve) => {
      setTimeout(() => resolve(Inventory.products), 1000);
    });

    id
      ? getItems.then((res) => {
          let allItems = res;
          let filteredItem = allItems.filter(
            (item) => Number(item.id) === Number(id)
          );
          setItem(filteredItem[0]);
          setLoading(false);
        })
      : getItems.then((res) => {
          setItem(res);
          setLoading(false);
        });
  }, [id]);

  return (

    <Container fluid="md">
      {loading ? (
        <Loading></Loading>
      ) : (
        <Row className="justify-content-md-center fade-in">
          {item
            ? <ItemDetail item={item}></ItemDetail>
            : <NotFound></NotFound>
          }
        </Row>
      )}
    </Container>

  );
}

export default ItemDetailContainer;
