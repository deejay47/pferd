import React, { useState } from "react";
import { Toast } from "react-bootstrap";

import "./Toastr.scss";

function Toastr({show, title, content, variant, delay, onClose}) {

  const [showToastr, setShowToastr] = useState(show);

  const noCallback = () => {
    console.warn("No callback function may cause malfunctions on multiple instances of Toastr, use the onClose function to reset the toastr container")
  }
  
  return (
    <Toast
      onClose={() => {
        setShowToastr(false)
        onClose ? (onClose()) : (noCallback())
      }}
      show={showToastr}
      delay={delay ? delay : 1500 }
      autohide
      className={'toastr toastr-' + variant} 
    >
      <Toast.Header closeButton={false}>
        <strong className="mr-auto">{title}</strong>
      </Toast.Header>
      <Toast.Body>{content}</Toast.Body>
    </Toast>
  );
}

export default Toastr;
