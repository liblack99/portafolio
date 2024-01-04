import React from "react";

function Layout({ children }) {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="relative flex justify-around sm:flex-col lg:flex-row sm:justify-center">
        {children}
      </div>
    </div>
  );
}

export default Layout;
