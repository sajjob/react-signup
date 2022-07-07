import React, { useContext } from "react";
import { Formik, Form } from "formik";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Schema2 } from "../../schema";
import signupContext from "../../context/signupContext";
import CustomInput from './FieldType/CustomInput'
import CustomCheckBox from "./FieldType/CustomCheckBox";
import Modal from "../Modal/Modal";

const StepTwo = () => {
  const {
    activeStepIndex,
    setActiveStepIndex,
    formData,
    setFormData,
    showModal,
    setShowModal,
  } = useContext(signupContext);
  return (
    <>
      {showModal && <Modal />}

      <Formik
        initialValues={{ name: "", email: "", acceptTerms: false }}
        validationSchema={Schema2}
        onSubmit={(values) => {
          const data = { ...formData, ...values };
          setFormData(data);
          console.log(data);
          setActiveStepIndex(activeStepIndex + 1);
        }}
      >
        <div className="form-control-me">
          <div className="form-container-me">
            <Form className="form-me">
              <div>
                <CustomInput
                  label="name"
                  name="name"
                  type="text"
                  placeholder="Enter your Name"
                />
              </div>

              <div>
                <CustomInput
                  label="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="terms-services-me">
                <CustomCheckBox type="checkbox" name="acceptTerms" />
                <p>
                  I have read and agree to the{" "}
                  <span
                    className="terms-me"
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    Terms of Service
                  </span>
                </p>
              </div>

              <button type="submit" className="btn-primary-me">
                Sign Up <AiOutlineArrowRight className="arrow-me" />
              </button>
            </Form>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default StepTwo;
