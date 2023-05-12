import React from 'react';
import Lottie from "lottie-react";
import construction from "../../assets/under-construction.json";

const Feature = () => {
    return (
      <div className="">
        <h1 className=''>Cooimg Soon ....Please Wait!!</h1>
        <div className="flex items-center  justify-center h-full w-full lg:mr-30 lg:mt-10">
          <Lottie animationData={construction} loop={true}></Lottie>
        </div>
      </div>
    );
};

export default Feature;