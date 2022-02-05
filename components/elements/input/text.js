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
  console.log(maxLength);
  return (
    <div className="mb-8 flex-1 pr-8">
      <label
        className={`font-adminPrimary text-base font-semibold ${
          required && "required-field"
        }`}
      >
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="border-black-10 font-raleway mt-1 h-10 w-full border bg-white px-1 text-sm font-medium focus:outline-0"
        name={name}
        value={value}
        onChange={(e) => onChangeHandler(e)}
        maxLength={maxLength || 400}
        required
      />
    </div>
  );
};
