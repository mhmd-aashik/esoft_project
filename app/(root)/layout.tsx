import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Parrot from "@/components/shared/parrot/Parrot";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
