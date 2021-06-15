
import "./NotFound.scss";

function NotFound() {
  return (
    <div className="not-found fade-in">

      <div className="container">
        <img className="background" src={"/img/Lost.jpg"} alt="404" width="1000" height="300" />
        <div className="center"> 
        <h1>No encontramos lo que buscabas...</h1> 
        <h2>... pero nunca dejes de buscar!</h2> 
        </div>
      </div>

    </div>
  );
}

export default NotFound;
