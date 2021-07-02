import React from "react";
import { Stepper, Step } from "react-form-stepper";

import "./CheckoutStepper.scss";

function CheckoutStepper(props) {
  const steps = [
    "Revisá tus productos",
    "Completá tus datos",
    "Pagá",
    "Pedido confirmado",
  ];

  return (
    <div>
      <Stepper activeStep={props.active}>
        {steps.map((step) => (
          <Step label={step} key={step.indexOf} />
        ))}
      </Stepper>
    </div>
  );
}

export default CheckoutStepper;
