import { createContext, useReducer, useRef, useState, useEffect } from "react";

import signinReducer from "./SigninReducer";

const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  // Used in Validation Function
  const VALID = {
    USERNAME_LENGHT: 4,
    PASSWORD_LENGHT: 6,
    PHONEN_NUMBER_LENGHT: 11,
  };

  // Modal
  const [showModal, setShowModal] = useState(false);
  const cancelModal = () => {
    setShowModal(false);
  };

  // Signup
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    terms: false,
  });

  // condition for show or not show Error Toast
  const [errorToast, setErrorToast] = useState(false);
  // when not validation Signup or same email in db.json exist
  const [errorMessage, setErrorMessage] = useState("");
  // get checkbox refrence
  const checkboxRef = useRef();

  // checked Terms of Services Checkbox
  const handleCheckBox = () => {
    setFormData((prevState) => ({
      ...prevState,
      terms: checkboxRef.current.checked,
    }));
  };

  // handle Signup states (formData)
  const onChangeSignup = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  // validation all inputs in Signup form
  const validateInputes = () => {
    const letterFilter = /[a-zA-Z]/;
    const numFilter = /[0-9]/;
    if (
      formData.username !== "" &&
      formData.firstname !== "" &&
      formData.lastname !== "" &&
      formData.phoneNumber !== "" &&
      formData.email !== "" &&
      formData.terms
    ) {
      if (formData.username.length < VALID.USERNAME_LENGHT) {
        console.log("Wrong Username");
        return false;
      } else if (formData.phoneNumber.length < VALID.PHONEN_NUMBER_LENGHT) {
        console.log("Wrong PhoneNumber");
        return false;
      } else if (
        formData.password < VALID.PASSWORD_LENGHT ||
        !letterFilter.test(formData.password) ||
        !numFilter.test(formData.password)
      ) {
        console.log("Wrong Password");
        return false;
      } else {
        return true;
      }

    } else {
      return false;
    }
  };

  // -------------Signin--------------
  const signinState = {
    email: "",
    password: "",
    isSignin: false,
    error: false,
    errorMessage: "",
    coocki: "",
  };
  const ACTION = {
    SET_COOCKI: "SET_COOCKI",
    FIELDS: "FIELDS",
    LOGIN: "LOGIN",
    ERROR: "ERROR",
  };

  const [state, dispatch] = useReducer(signinReducer, signinState);

  useEffect(() => {
    dispatch({ type: ACTION.SET_COOCKI });
  }, [state.isSignin]);

  //for used in Dashboard page and Edit user info
  const [logUser, setLogUser] = useState({});

  //handle assignment fields to states
  const onChangeSignin = (e) => {
    // setSigninData((prevData) => ({
    //   ...prevData,
    //   [e.target.id]: e.target.value,
    // }));

    dispatch({
      type: ACTION.FIELDS,
      field: [e.target.id],
      value: e.target.value,
    });
  };

  return (
    <RegisterContext.Provider
      value={{
        formData,
        checkboxRef,
        showModal,
        errorToast,
        errorMessage,
        setErrorToast,
        setFormData,
        handleCheckBox,
        cancelModal,
        setShowModal,
        onChangeSignup,
        validateInputes,
        setErrorMessage,

        isSignin: state.isSignin,
        signinData: state,
        errorToastSignin: state.error,
        errorMessageSignin: state.errorMessage,
        logUser,
        setLogUser,
        setIsSignin: (e) => dispatch({ type: ACTION.LOGIN, payload: e }),
        onChangeSignin,
        setErrorToastSignin: (e) =>
          dispatch({ type: ACTION.ERROR, payload: e }),
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContext;
