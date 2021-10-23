import React from "react";
import { useFormikContext } from "formik";

function SubmitButton({ children, ...otherProps }) {
  const { handleSubmit } = useFormikContext();

  return <button onClick={handleSubmit} { ...otherProps }>{children}</button>;
}

export default SubmitButton;
