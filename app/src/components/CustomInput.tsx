import React, { FC, ReactNode } from "react";

interface ICustomInput {
  onChange?: () => void;
  value?: string;
  style?: {};
  maxLength?: number;
  name: string;
    placeholder?: string;
    label: string;
    icon?: ReactNode
}

const CustomInput = ({
  onChange,
  value,
  style,
  name,
  maxLength,
    placeholder,
    label,
  icon
}: ICustomInput) => {
    return (
      //cursor-not-allowed
      <div className="w-full pt-6">
        <div className="tune-label-container flex flex-col">
          <div className="tune-label flex items-center gap-1">{label}</div>
        </div>
        <div className="flex">
          <div className="group relative z-10 flex w-full">
            {icon}
            <input
              className={
                icon
                  ? "!pl-[40px] tune-input px-3 py-2 w-full"
                  : "tune-input px-3 py-2 w-full"
              }
              type="text"
              placeholder={placeholder}
              name={name}
              maxLength={maxLength}
              style={style}
              value={value}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    );
};

export default CustomInput;
