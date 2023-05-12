import React from "react";

import HomeMiddle from "./HomeMiddle";
import HeroSection from "./HeroSection";
import HomeCard from "./HomeCard";
import NFTSection from "./NFTSection";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <HomeMiddle />
      <HomeCard/>
      <NFTSection/>
    </div>
  );
};

export default Home;
