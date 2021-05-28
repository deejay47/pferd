import React from "react";
import { useParams } from "react-router";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"

import "./ItemDetails.scss";

function ItemDetails() {

  const params = useParams()
  const itemId = params.id

  return (

    <div id="item-details-view">

      <ItemDetailContainer itemId={itemId}></ItemDetailContainer>

    </div>

  );
}

export default ItemDetails;
