import React from 'react';
import Lottie from "lottie-react";
import comingsoon from "../../assets/coming-soon.json";
const NftRights = () => {
    return (
      <div className="">
        <h1 className="">Cooimg Soon ....Please Wait!!</h1>
        <div className="flex items-center  justify-center h-full w-full lg:mr-30 lg:mt-10">
          <Lottie animationData={comingsoon} loop={true}></Lottie>
        </div>
      </div>
    );
};

export default NftRights;