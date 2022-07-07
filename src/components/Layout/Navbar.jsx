import React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="nav-bar-me">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/signup">Signup</Link></li>
      <li><Link to="/signin">Signin</Link></li>
    </div>
  );
};

export default Navbar;