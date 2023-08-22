import * as React from "react";
import "./style.css";

export const Button = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};
