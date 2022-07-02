import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import RegisterContext from "../../context/registerContext";

const PrivateRoute = () => {
  const {isSignin} = useContext(RegisterContext)

  return isSignin ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
