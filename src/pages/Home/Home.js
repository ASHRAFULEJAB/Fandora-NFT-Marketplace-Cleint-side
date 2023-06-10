import React from "react";

import HomeMiddle from "./HomeMiddle";
import HeroSection from "./HeroSection";
import HomeCard from "./HomeCard";
import NFTSection from "./NFTSection";
import Creator from "./Creator";
import Subscription from "./Subscription";
import Discover from "./Discover";
import NFTCollection from "./NFTCollection";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <HomeMiddle />
      <NFTCollection/>
      <HomeCard/>
      <NFTSection/>
      <Creator/>
      <Subscription/>
      <Discover/>
    </div>
  );
};

export default Home;
