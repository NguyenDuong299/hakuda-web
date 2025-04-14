import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen z-50 fixed top-0 left-0 w-full bg-white">
      <img src="/images/icons/loading.svg" alt="loading" className="h-12" />
    </div>
  );
};
export default Loading;
