import React from "react";

import "./About.scss";

function About() {
  return (
<div className="resellers-view fade-in">
        <div className="container">
          <img
            className="about-background"
            src={"/img/assets/bikers.jpg"}
            alt="404"
          />
          <div className="about-reseller">
            <h1>¿Qué es PFERD?</h1>
            <h2>PFERD es una iniciativa pensada por motociclistas, para
            motociclistas.</h2>
          </div>
        </div>
    </div>
  );
}

export default About;
