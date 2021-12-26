import React from "react";

export const adminBooleanToggle = ({
  stateVar,
  label,
  truthyText,
  falsyText,
  toggleValue,
  toggleFunction
}) => {
  return (
    <>
      <label className="font-adminPrimary text-base font-semibold">
        {label}
      </label>
      <div className="mt-1">
        <button
          className={`py-2 px-3 text-sm font-raleway font-medium ${
            stateVar.toggleValue ? "text-white bg-green-600" : "bg-white"
          } `}
          onClick={() => toggleFunction({ ...stateVar, [toggleValue]: true })}
        >
          {truthyText}
        </button>
        <button
          className={`py-2 px-3 text-sm font-raleway font-medium ${
            !stateVar.toggleValue ? "text-white bg-red-600" : "bg-white"
          }`}
          onClick={() => toggleFunction({ ...stateVar, [toggleValue]: false })}
        >
          {falsyText}
        </button>
      </div>
    </>
  );
};
