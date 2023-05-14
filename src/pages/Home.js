import React from "react";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import WeeklyItems from "../components/Home/WeeklyItems/WeeklyItems";
import TrendingBrands from "../components/Home/TrendingBrands/TrendingBrands";
import Testimonial from "../components/Home/Testimonial/Testimonial";
import SellWithFurni from "../components/Home/SellWithFurni/SellWithFurni";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WeeklyItems />
      <TrendingBrands />
      <Testimonial />
      <SellWithFurni />
    </div>
  );
};

export default Home;
