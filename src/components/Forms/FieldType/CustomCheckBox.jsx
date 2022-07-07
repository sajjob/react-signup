import { useField } from "formik";
import React from "react";

const CustomCheckBox = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error} </div> }
    </>
  );
};

export default CustomCheckBox;