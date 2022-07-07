import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import signupContext from "../../context/signupContext";

import "./Styles.scss";

const Success = () => {
  const navigate = useNavigate();
  const { setIsSignup, setActiveStepIndex } = useContext(signupContext);
  setIsSignup(true);

  {setTimeout(() => {
    setActiveStepIndex(0);
    navigate("/dashboard");
  }, 1500)}
  return (
    <div className="toast">
      <h4>Successful Signup</h4>
    </div>
  );
};

export default Success;
