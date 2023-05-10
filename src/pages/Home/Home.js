import React from "react";
import Banner from "../../assets/images/Hero Image BG.png";
const Home = () => {
  return (
    <div>
      <div className="relative h-[56.25vw]">
        <img
          className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"
          src={Banner}
          alt="imgae"
        ></img>
        <div className="absolute top-[10%] md:top-[20%] ml-4 md:ml-16">
          <p
            className="text-white  uppercase text-1xl md:text-5xl h-full w-[50%] lg:text-8xl 
          font-bold drop-shadow-xl"
          >
            Calling Creators of the Future
          </p>
          <p
            className="text-[#52C1B9] text-[25px] md:text-lg mt-3 md:mt-8 w-[90%]
           md:w-[80%] lg:w-[50%] drop-shadow-xl"
          >
            The World’s First Pre-NFT Rights <br /> and Content Marketplace
          </p>
          <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
            <button
              className="
            bg-tarsparent
            text-[#52C1B9]
              bg-opacity-30 
              rounded-full 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-xs 
              font-semibold
              flex
              border
              border-[#52C1B9]
              flex-row
              items-center
              hover:bg-opacity-20
              transition
            "
            >
              NOW LIVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
