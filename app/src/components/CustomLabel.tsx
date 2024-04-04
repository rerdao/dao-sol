import React, { FC, ReactNode } from "react";

interface ICustomLabel {
  style?: {};
  label: string;
  icon?: ReactNode;
}

const CustomLabel = ({
  style,
  label,
  icon,
}: ICustomLabel) => {
  return (
    //cursor-not-allowed
    <h4 className="flex items-center" style={style}>
      {label}
    </h4>
  );
};

export default CustomLabel;
