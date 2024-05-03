import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FeatureSection from "./Components/FeatureSection";
import WorkFlowSection from "./Components/WorkFlowSection";
import Price from "./Components/Price";
import Testimonials from "./Components/Testimonials";
import MainLayout from "./layout/MainLayout";
// import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <FeatureSection />
        <WorkFlowSection />
        <Price />
        <Testimonials />
      </MainLayout>
    </>
  );
};

export default App;
