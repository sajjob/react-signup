import React, { useState, useRef, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./Styles.scss";

import RegisterContext from "../context/registerContext";

import Navbar from "../components/layout/Navbar";
import { modal } from "../utils/functions";

import SuccessToast from "../components/UI/SuccesToast";
import ErrorToast from "../components/UI/ErrorToast";

let AuthEmail = true

const Signup = () => {

  const {
    formData,
    handleCheckBox,
    checkboxRef,
    errorToast,
    showModal,
    setShowModal,
    onChangeSignup,
    validateInputes,
    setErrorToast,
    setErrorMessage,
  } = useContext(RegisterContext);

  const [successToast, setSuccessToast] = useState(false);
  const navigate = useNavigate();

  //For auth email field
  const checkEmail = async () => {
    const res = await fetch("http://localhost:5000/user")
    const users = await res.json();

    const filterEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    for(let user of users){
      if(user.email === formData.email && !filterEmail.test(formData.email)){
        AuthEmail = false
      } else {
        AuthEmail = true
      }
    }
  }

  useEffect(() => {
    checkEmail()
  },)

  const addUser = async () => {

    const response = await fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const user = await response.json();
    // localStorage.setItem('token', JSON.stringify(user.email))
    // console.log(localStorage.getItem('token'));

    // for better see taost but in reality not should implement like this :)
    setTimeout(() => {
      navigate("/signin");
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputes() && AuthEmail) {
      try {
        setSuccessToast(true);
        addUser();
      } catch (error) {
        console.log("Somthing is Wrong!");
      }
    } else if(validateInputes() && !AuthEmail) {
      setErrorToast(true);
      setErrorMessage("Wrong Email or Email Already exist. Try a nother one");
      setTimeout(() => {
        setErrorToast(false);
      }, 1500);
    } else {
      setErrorToast(true);
      setErrorMessage("All Fields Requared!");
      setTimeout(() => {
        setErrorToast(false);
      }, 1500);
    }
  };

  return (
    <div>
      {successToast && <SuccessToast />}
      {errorToast && <ErrorToast />}
      {showModal && modal()}
      <Navbar />
      <h1>Signup</h1>
      <div>
        <div className="form-control-me">
          <div className="form-container-me">
            <form className="form-me" onSubmit={handleSubmit}>
              <div className="title-me">
                <h1>Create account</h1>
              </div>
              <p>
                Already have an accont? <Link to="/signin">Sign In</Link>
              </p>

              <div className="inputs-me">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="form-input-me"
                  onChange={onChangeSignup}
                />
                <div className="lfname-grid-me">
                  <div className="col_half-me">
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="First name"
                      className="form-input-me"
                      onChange={onChangeSignup}
                    />
                  </div>
                  <div className="col_half-me">
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Last name"
                      className="form-input-me"
                      onChange={onChangeSignup}
                    />
                  </div>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="form-input-me"
                  onChange={onChangeSignup}
                />
                <input
                  type="number"
                  name="phone"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  className="form-input-me"
                  onChange={onChangeSignup}
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="form-input-me"
                  onChange={onChangeSignup}
                />
              </div>

              <button type="submit" className="btn-primary-me">
                Sign Up <AiOutlineArrowRight className="arrow-me" />
              </button>
              <div className="terms-services-me">
                <input
                  type="checkbox"
                  id="terms"
                  ref={checkboxRef}
                  onClick={handleCheckBox}
                />
                <p>
                  I have read and agree to the{" "}
                  <span
                    className="terms-me"
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    Terms Services
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
