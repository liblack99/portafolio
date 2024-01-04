import React from "react";

function Main({ children }) {
  return (
    <div className="lg:w-[578px] flex flex-col items-center sm:w-full">
      {children}
    </div>
  );
}

export default Main;
