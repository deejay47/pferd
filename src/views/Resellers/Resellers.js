import "./Resellers.scss";

function Resellers() {
  return (
    <div className="resellers-view fade-in">
        <div className="container">
          <img
            className="reseller-background"
            src={"/img/assets/reseller.jpg"}
            alt="404"
          />
          <div className="center-reseller">
            <h1>¿Querés ofrecer nuestros productos?</h1>
            <h2>Contactanos y formá parte de la red PFERD</h2>
          </div>
        </div>
    </div>
  );
}

export default Resellers;
