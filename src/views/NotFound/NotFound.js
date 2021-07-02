import "./NotFound.scss";

function NotFound() {
  return (
    <div className="fade-in">
      <div className="container">
        <img
          className="not-found-background"
          src={"/img/Lost.jpg"}
          alt="404"
        />
        <div className="not-found-center">
          <h1>No encontramos lo que buscabas...</h1>
          <h2>... pero nunca dejes de buscar!</h2>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
