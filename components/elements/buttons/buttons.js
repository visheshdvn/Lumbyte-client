import React from "react";

export const PublishButton = ({ text, onClickHandler }) => {
  return (
    <button
      type="button"
      className="bg-[#1da1f2] border w-28 py-1 font-raleway font-semibold text-base text-white rounded"
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export const SaveButton = ({ text, onClickHandler }) => {
  return (
    <button
      type="button"
      className="bg-[#16A34A] border w-28 py-1 ml-4 font-raleway font-semibold text-base text-white rounded"
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};
