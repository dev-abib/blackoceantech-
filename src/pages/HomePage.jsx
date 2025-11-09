import React from "react";
import Hero from "../Components/Pages/HomePage/Hero";
import AboutUs from "../Components/Pages/HomePage/AboutUs";
import Features from "../Components/Pages/HomePage/Features";
import WhyChooseUs from "../Components/Pages/HomePage/WhyChooseUs";
import GetInTouch from "../Components/Pages/HomePage/GetInTouch";

const HomePage = () => {
  return (
    <>
      <AboutUs />
      <Features />
      <WhyChooseUs />
      <GetInTouch />
    </>
  );
};

export default HomePage;
