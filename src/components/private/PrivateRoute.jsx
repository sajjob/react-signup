import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import signupContext from "../../context/signupContext"; 

const PrivateRoute = () => {
  const {isSignup} = useContext(signupContext)

  return isSignup ? <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateRoute;