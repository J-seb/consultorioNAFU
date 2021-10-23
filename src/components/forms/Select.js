import React from "react";
import { useFormikContext } from "formik";

function Select ({ name, type, className, placeholder, children, ...otherProps }) {
    const { setFieldTouched, setFieldValue, values, errors, touched } =
      useFormikContext();
    return (
        <>
            <div className="form-group">
                <select 
                onBlur={() => setFieldTouched(name)}
                    onChange={({ target }) => setFieldValue(name, target.value)}
                    value={values[name]}
                    type={type}
                    className={className}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    spellCheck={false}
                    {...otherProps}>
                    {children}
                </select>
            </div>
            {errors[name] && touched[name] && <div className="alert alert-danger px-2 py-1"><p className="m-0">{errors[name]}</p></div>}
        </>
    );
}

export default Select;