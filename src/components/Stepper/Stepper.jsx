import React, { useContext, useEffect } from "react";
import signupContext from "../../context/signupContext";

import "./Stepper.scss";

const Stepper = () => {
  const { activeStepIndex, setActiveStepIndex } = useContext(signupContext);

  useEffect(() => {
    const stepperItems = document.querySelectorAll(".stepper-item");

    stepperItems.forEach((step, i) => {
      if (i <= activeStepIndex) {
        step.classList.add("bg-primary", "text-white", "hov-step");
      } else {
        step.classList.remove("bg-primary", "text-white", "hov-step");
      }
    });
  }, [activeStepIndex]);

  return (
    <div>
      <h5 style={{textAlign: "center"}}>Step</h5>
      <div className="stepper">
        <div
          className="stepper-item"
          onClick={() => {
            if (activeStepIndex === 1) {
              setActiveStepIndex(activeStepIndex - 1);
            }
          }}
        >
          1
        </div>
        <span> / </span>
        <div className="stepper-item">2</div>
      </div>
    </div>
  );
};

export default Stepper;
