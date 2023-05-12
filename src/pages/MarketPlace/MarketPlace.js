import React from 'react';
import Lottie from "lottie-react";
import comingsoon1 from "../../assets/coming-soon1.json";
const MarketPlace = () => {
    return (
      <div className="">
        <h1 className="">Cooimg Soon ....Please Wait!!</h1>
        <div className="flex items-center  justify-center h-full w-full lg:mr-30 lg:mt-10">
          <Lottie animationData={comingsoon1} loop={true}></Lottie>
        </div>
      </div>
    );
};

export default MarketPlace;