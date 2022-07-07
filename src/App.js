import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { SignupProvider } from "./context/signupContext";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from './components/private/PrivateRoute'
import Signin from "./pages/Signin";

const App = () => {
  return (
    <SignupProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SignupProvider>
  );
};

export default App;
