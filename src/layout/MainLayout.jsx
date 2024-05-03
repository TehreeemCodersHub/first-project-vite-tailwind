import React from "react";
import Navbar from "../Components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">{children}</div>
    </div>
  );
};

export default MainLayout;
