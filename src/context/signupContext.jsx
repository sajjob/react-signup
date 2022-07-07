import { createContext, useState } from "react";

const signupContext = createContext();

export const SignupProvider = ({ children }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({});

  const [showModal, setShowModal] = useState(false);
  const cancelModal = () => {
    setShowModal(false);
  };

  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <signupContext.Provider
      value={{
        isSignup,
        setIsSignup,
        activeStepIndex,
        setActiveStepIndex,
        formData,
        setFormData,
        showModal,
        setShowModal,
        cancelModal,
      }}
    >
      {children}
    </signupContext.Provider>
  );
};

export default signupContext;
