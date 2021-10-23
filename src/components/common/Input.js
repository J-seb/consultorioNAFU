import React from "react";

const Input = ({ type = "text", placeholder, name, error, className, ...rest }) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className={className}
        id={name}
        name={name}
        placeholder={placeholder}
        spellCheck={false}
        {...rest}
      />
      {error && <div className="alert alert-danger px-2 py-1"><p className="m-0">{error}</p></div>}
    </div>
  );
};

export default Input;
