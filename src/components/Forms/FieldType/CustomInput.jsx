import { useField } from "formik";
import React from "react";

const CustomInput = ({...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input 
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error form-input-me" : "form-input-me"}
      /> <br />
      {meta.touched && meta.error && <div className="error">{meta.error} </div> }
    </>
  );
};

export default CustomInput;