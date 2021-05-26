import NavBar from "../../components/NavBar/NavBar";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"

function Home() {
  return (
    <div className="home-view">
      
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>

    </div>
  );
}

export default Home;
