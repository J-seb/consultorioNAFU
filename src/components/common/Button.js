import React from "react";

const Button = ({ className, children, ...rest }) => {
  return (
    <div className="form-group">
      <button className={className} {...rest}>{children}</button>
    </div>
  );
};

export default Button;
