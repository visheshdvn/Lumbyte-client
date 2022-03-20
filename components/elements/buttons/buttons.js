import React from "react";

export const PublishButton = ({ text, onClickHandler }) => {
  return (
    <button
      type="button"
      className="w-28 rounded bg-[#1da1f2] py-1 text-base font-medium text-white"
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export const UnPublishButton = ({ text, onClickHandler }) => {
  return (
    <button
      type="button"
      className="w-28 rounded bg-red-500 py-1 text-base font-medium text-white"
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
      className="ml-4 w-28 rounded bg-[#16A34A] py-1 text-base font-medium text-white"
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};
