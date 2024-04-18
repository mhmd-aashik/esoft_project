import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#020617] ">
      {children}
    </div>
  );
};

export default Layout;
