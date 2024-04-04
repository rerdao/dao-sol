import React, { FC, ReactNode } from "react";

interface ICustomSelect {
  onChange?: () => void;
  value?: string;
  style?: {};
  maxLength?: number;
  name: string;
  placeholder?: string;
  label: string;
  icon?: ReactNode;
}

const CustomSelect = ({
  onChange,
  value,
  style,
  name,
  maxLength,
  placeholder,
  label,
  icon,
}: ICustomSelect) => {
  return (
    //cursor-not-allowed
    <div>
      <div data-headlessui-state="disabled">
        <label id="headlessui-listbox-label-6" data-headlessui-state="disabled">
          <div className="tune-label-container flex flex-col">
            <div className="tune-label flex items-center gap-1">
              {label}
            </div>
          </div>
        </label>
        <div className="flex">
          <div className="group relative z-10 flex w-full">
            {icon}
            <select
                          className="!pl-[40px] tune-input px-3 py-2 w-full"
                          name={name}
              style={style}
            >
                <option>{ placeholder }</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;
