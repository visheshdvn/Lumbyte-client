import React from "react";
// import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="flex min-h-screen w-screen flex-col items-center justify-center">
        <h1 className="font-primary lg:text-2.75xl mb-5 text-center text-xl font-semibold">
          Not found what you are looking for :/
        </h1>
        <a
          href="/"
          className="font-primary transform rounded border border-blue-600 px-5 py-3 text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
        >
          Return to HomePage 🏠
        </a>
      </div>
    </>
  );
};

export default NotFound;
