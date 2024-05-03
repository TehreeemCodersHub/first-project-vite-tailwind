import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FeatureSection from "./Components/FeatureSection";
import WorkFlowSection from "./Components/WorkFlowSection";
import Price from "./Components/Price";
import Testimonials from "./Components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <div className=" max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <FeatureSection />
        <WorkFlowSection />
        <Price />
        <Testimonials />
      </div>
    </>
  );
};

export default App;
