import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { RegisterProvider } from "./context/registerContext";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/layout/PrivateRoute";

const App = () => {
  return (
    <div>
      <RegisterProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/dashboard" element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          </Router>
      </RegisterProvider>
    </div>
  );
};

export default App;
