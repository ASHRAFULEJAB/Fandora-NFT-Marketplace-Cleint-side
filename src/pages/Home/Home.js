import React from "react";

import HomeMiddle from "./HomeMiddle";
import HeroSection from "./HeroSection";
import HomeCard from "./HomeCard";
import NFTSection from "./NFTSection";
import Creator from "./Creator";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <HomeMiddle />
      <HomeCard/>
      <NFTSection/>
      <Creator/>
    </div>
  );
};

export default Home;
