import React, { useContext } from "react";
import signupContext from "../../context/signupContext";
import StepOne from "../Forms/StepOne";
import StepTwo from "../Forms/StepTwo";
import Success from "../Forms/Success";

const Step = () => {
  const { activeStepIndex } = useContext(signupContext);

  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <StepOne />;
      break;
    case 1:
      stepContent = <StepTwo />;
      break;
    default:
      stepContent = <Success />;
  }

  return stepContent;
};

export default Step;
