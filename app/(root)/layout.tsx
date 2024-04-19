import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
