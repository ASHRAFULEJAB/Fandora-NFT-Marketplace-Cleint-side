import React from "react";

import HomeMiddle from "./HomeMiddle";
import HeroSection from "./HeroSection";
import HomeCard from "./HomeCard";
import NFTSection from "./NFTSection";
import Creator from "./Creator";
import Subscription from "./Subscription";
import Discover from "./Discover";
import NFTCollection from "./NFTCollection";
import Blog from "./Blog";
import Contact from "./Contact";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <HomeMiddle />
      <NFTCollection />
      <HomeCard />
      <NFTSection />
      <Creator />
      <Subscription />
      <Discover />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
