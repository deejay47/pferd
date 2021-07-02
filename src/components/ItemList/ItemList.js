import { React, useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Item from "../Item/Item";
import Loading from "../Loading/Loading";
import NotFound from "../../views/NotFound/NotFound";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/index";

import "./ItemList.scss";

function ItemList() {
  const { id } = useParams();
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = db.collection("items");

    id
      ? itemsCollection.get().then((snapshot) => {
          let allItems = snapshot.docs.map((doc) => doc.data());
          let filteredItems = allItems.filter(
            (item) => Number(item.category_id) === Number(id)
          );
          setItems(filteredItems);
          setLoading(false);
        })
      : itemsCollection.get().then((snapshot) => {
          setItems(snapshot.docs.map((doc) => doc.data()));
          setLoading(false);
        });
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <Row className="justify-content-md-center fade-in">
          {items[0] ? (
            items?.map((item) => (
              <Col key={item.id} md="4">
                <Item item={item}></Item>
              </Col>
            ))
          ) : (
            <NotFound></NotFound>
          )}
        </Row>
      )}
    </div>
  );
}

export default ItemList;
