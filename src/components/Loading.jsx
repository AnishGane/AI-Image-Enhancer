import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="border-5 w-18 h-18 rounded-full border-t-transparent animate-spin border-blue-500"></div>
    </div>
  );
};

export default Loading;
