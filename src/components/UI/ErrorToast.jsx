import React, { useContext, useState } from "react";

import RegisterContext from "../../context/registerContext";

import "./Toast.scss";

const ErrorToast = () => {
  const { errorMessageSignin, errorMessage } = useContext(RegisterContext);
 
  return (
      <div className="danger">
        <p>{errorMessageSignin || errorMessage}</p>
      </div>

  );
};

export default ErrorToast;
