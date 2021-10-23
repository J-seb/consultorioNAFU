import React from "react";
import { useFormikContext } from "formik";

function FormField ({ name, type, className, placeholder, ...otherProps }) {
  const { setFieldTouched, setFieldValue, values, errors, touched } =
    useFormikContext();
  return (
    <>
      <div className="form-group">
        <textarea
          onBlur={() => setFieldTouched(name)}
          onChange={({ target }) => setFieldValue(name, target.value)}
          value={values[name]}
          type={type}
          className={className}
          id={name}
          name={name}
          placeholder={placeholder}
          spellCheck={false}
          {...otherProps}
        />
      </div>
      {errors[name] && touched[name] && <div className="alert alert-danger px-2 py-1"><p className="m-0">{errors[name]}</p></div>}
    </>
  );
}

export default FormField;