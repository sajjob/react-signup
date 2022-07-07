import { Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from "react-router-dom";
import { Schema } from "../../schema";
import signupContext from "../../context/signupContext";
import CustomInput from './FieldType/CustomInput'
import "./Styles.scss";

const StepOne = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(signupContext);
  return (
    <Formik
      initialValues={{ phoneNumber: "", password: "" }}
      validationSchema={Schema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <div className="form-control-me">
        <div className="form-container-me">
          <Form className="form-me">
            <div className="title-me">
              <h1>Create account</h1>
            </div>
            <p>
              Already have an accont? <Link to="/signin">Sign In</Link>
            </p>
            <div className="inputs-me"> 
              <CustomInput
                name="phoneNumber"
                type="text"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="inputs-me">
              <CustomInput
                name="password"
                type="password"
                placeholder="Enter your Password"
              />
            </div>

            <button type="submit" className="btn-primary-me">
            Sign Up <AiOutlineArrowRight className="arrow-me" />
            </button>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default StepOne;
