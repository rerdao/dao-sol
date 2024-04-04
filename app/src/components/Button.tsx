import React, { FC, ReactNode } from "react";

interface ICustomButton {
  onClick?: () => void;
  value: string;
  btntype?: string;
  style?: {}
}


const CustomButton = ({ onClick, value, btntype, style }: ICustomButton) => {
  
  return (
    <button
      className={
        btntype === "default" || btntype === undefined
          ? "text-white p-2 pl-20 pr-20 rounded-full"
          : "text-white p-3 pl-20 pr-20 bg-gray-800 border-y border-skin-border bg-skin-block-bg text-base md:border border rounded-full"
      }
      style={style}
      onClick={() => onClick}
    >
      {value}
    </button>
  );
};

export default CustomButton;