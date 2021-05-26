import { React } from "react";
import NavBar from "../../components/NavBar/NavBar"
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"

import "./ItemDetails.scss";

function ItemDetails() {

  const item = { id: 1 }

  return (

    <div id="item-details-view">

      <NavBar></NavBar>
      <ItemDetailContainer item={item.id}></ItemDetailContainer>

    </div>

  );
}

export default ItemDetails;
