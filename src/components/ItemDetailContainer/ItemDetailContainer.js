import { React, useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Loading from "../Loading/Loading";
import ItemDetail from "../ItemDetail/ItemDetail";
import NotFound from "../../views/NotFound/NotFound";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/index";

import "./ItemDetailContainer.scss";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = db.collection("items");

    id
      ? itemsCollection.get().then((snapshot) => {
          let allItems = snapshot.docs.map((doc) => doc.data());
          let filteredItem = allItems.filter(
            (item) => Number(item.id) === Number(id)
          );
          setItem(filteredItem[0]);
          setLoading(false);
        })
      : setItem(null);
  }, [id]);

  return (
    <Container fluid="md">
      {loading ? (
        <Loading></Loading>
      ) : (
        <Row className="justify-content-md-center fade-in">
          {item ? <ItemDetail item={item}></ItemDetail> : <NotFound></NotFound>}
        </Row>
      )}
    </Container>
  );
}

export default ItemDetailContainer;
