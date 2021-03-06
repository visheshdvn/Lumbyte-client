import React from "react";

export const AdminInlineTextInput = ({
  label,
  name,
  value,
  onChangeHandler,
  placeholder,
  required,
  maxLength,
}) => {
  return (
    <div className="mb-8 flex-1 pr-8">
      <label
        className={`text-base font-medium ${required && "required-field"}`}
      >
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder || `enter ${label.toLowerCase()}`}
        className="border-black-10 font-primary mt-1 h-10 w-full border bg-white px-1 text-sm font-normal focus:outline-0"
        name={name}
        value={value}
        onChange={(e) => onChangeHandler(e)}
        maxLength={maxLength || 400}
        required
      />
    </div>
  );
};
