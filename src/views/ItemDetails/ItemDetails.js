import React from "react";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"

import "./ItemDetails.scss";

function ItemDetails() {

  const item = { id: 1 }

  return (

    <div id="item-details-view">

      <ItemDetailContainer item={item.id}></ItemDetailContainer>

    </div>

  );
}

export default ItemDetails;
