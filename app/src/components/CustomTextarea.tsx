import React, { FC, ReactNode } from "react";

interface ICustomTextarea {
  onChange?: () => void;
  value?: string;
  style?: {};
  maxLength?: number;
  name: string;
  placeholder?: string;
  label: string;
}

const CustomTextarea = ({
  onChange,
  value,
  style,
  name,
  maxLength,
  placeholder,
  label,
}: ICustomTextarea) => {
  return (
    <div className="pt-6">
      <div className="tune-label-container flex flex-col">
        <div className="tune-label flex items-center gap-1">
          {label}
        </div>
      </div>
      <textarea
        className="tune-textarea w-full lg:h-60"
        placeholder={placeholder}
        name={name}
        maxLength={maxLength}
        style={style}
        value={value}
      ></textarea>
    </div>
  );
};

export default CustomTextarea;
