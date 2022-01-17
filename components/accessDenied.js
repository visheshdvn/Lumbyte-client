import React from "react";

const accessDenied = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-offWhite">
      <div className="border p-8 bg-white rounded">
        <h1 className="text-6xl font-raleway font-semibold mb-8">
          Access Denied⚠️
        </h1>
        <div className="text-center">
          <a
            href="/"
            className="border-2 py-2 px-3 rounded font-semibold border-blue-600 text-blue-600 font-adminPrimary text-sm hover:bg-blue-600 hover:text-white transform transition-all duration-300"
          >
            Return to home page🏠
          </a>
        </div>
      </div>
    </div>
  );
};

export default accessDenied;
