import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h2 className="text-4xl font-bold text-yellow-500">
        L <span className="animate-spin">☀️</span> DING
      </h2>
    </div>
  );
};

export default loading;
