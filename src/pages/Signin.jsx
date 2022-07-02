import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import ErrorToast from "../components/UI/ErrorToast";

import RegisterContext from "../context/registerContext";

const Signin = () => {
  const {
    setLogUser,
    signinData,
    setIsSignin,
    onChangeSignin,
    setErrorToastSignin,
    errorToastSignin,
  } = useContext(RegisterContext);

  const navigate = useNavigate();

  const signIn = async () => {
    const response = await fetch(
      "http://localhost:5000/user?_sort=id&_order=desc"
    );
    const users = await response.json();
    // for find username and password in db.json (signin auth)
    for (let user of users) {
      if (
        user.email === signinData.email &&
        user.password === signinData.password
      ) {
        setLogUser({ ...user });

        setIsSignin(true);
        navigate("/dashboard");
      } else {
        setErrorToastSignin(!errorToastSignin);
          setTimeout(() => {
            setErrorToastSignin(false);
            setIsSignin(false);
          }, 1500);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      signIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Signin</h1>

      {errorToastSignin && <ErrorToast />}
      <div>
        <div className="form-control-me">
          <div className="form-container-me login-form-me">
            <form className="form-me" onSubmit={handleSubmit}>
              <div className="title-me">
                <h1>Sign in</h1>
              </div>
              <p>
                Already have an accont? <Link to="/signup">Sign Up</Link>
              </p>

              <div className="inputs-me">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="form-input-me"
                  onChange={onChangeSignin}
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="form-input-me"
                  onChange={onChangeSignin}
                />
              </div>
              <button type="submit" className="signin-btn-me">
                Signin <AiOutlineArrowRight className="arrow-me" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
