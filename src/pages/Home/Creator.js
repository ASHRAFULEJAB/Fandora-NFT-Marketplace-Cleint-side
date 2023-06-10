import React from "react";
import phoneMockup from "../../assets/images/Phone mockup 2.png";
import tableMockup from "../../assets/images/Tablet Mockup 1.png";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Creator = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#5E4CB6] from-57.62% via-[#7F9ECF] via-33.35% 
      to-[#8EC0D7] to-11.96%"
    >
      {/* creator section */}
      <div className="lg:flex lg:mx-24 lg:ml-0 ml-6">
        <img src={phoneMockup} alt="" className="lg:h-42 lg:w-42" />
        <div className="text-[#FFFFFF] mt-10 lg:ml-12">
          <p className="lg:text-[16px] font-semibold uppercase">
            NFT rights Marketplace
          </p>
          <h1 className="text-[36px] font-bold mt-3">Are you a Creator?</h1>
          <p className="text-[18px] mt-3">
            Now sell Pre NFT rights and monetise your <br /> existing content
            for Web3 applications
          </p>
          <button
            onClick={() => {
              toast.error(
                "Your Checkout is under processing!!Please a little Bit??"
              );
            }}
            to="/register"
            class="inline-flex items-center 
                justify-center ml-3  mt-3 h-[74px] w-[220px] px-6 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md
                  bg-[#52C1B9]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
            aria-label="Sign up"
          >
            CHECK IT OUT!
          </button>
        </div>
      </div>
      {/* Web3 pro section */}
      <div className="lg:flex  lg:mx-22 lg:ml-0 ml-6">
        <div className="text-[#FFFFFF] mt-10 lg:ml-32">
          <p className="text-[16px] font-semibold uppercase">
            NFT rights Marketplace
          </p>
          <h1 className="text-[36px] font-bold mt-3">Are you a WEB3 Pro?</h1>
          <p className="text-[18px] mt-3">
            Access best content for building stronger <br /> Web3 assets and
            package them with our <br /> advanced NFT Utilities
          </p>
          <button
            onClick={() => {
              toast.error(
                "Your Checkout is under processing!!Please a little Bit??"
              );
            }}
            to="/register"
            class="inline-flex items-center 
                justify-center ml-3  mt-3 h-[74px] w-[220px] px-6 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md
                  bg-[#52C1B9]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
            aria-label="Sign up"
          >
            CHECK IT OUT!
          </button>
        </div>
        <img src={tableMockup} alt="" className="lg:h-42 lg:w-[960px]" />
      </div>
      {/* explore esction */}
      <div className="text-[#FFFFFF] text-center">
        <p className="text-[16px] font-semibold uppercase">
          HomeGrown Marketplace
        </p>
        <h1 className="text-[36px] font-bold mt-3">
          Explore an NFT Marketplace unlike any other
        </h1>
        <p className="text-[18px] mt-3">
          Our homegrown NFT marketplace allows creators and pre NFT rights
          holders to create and sell officially licensed NFTs
        </p>
        <Link to="/marketplace">
          <button
            class="inline-flex items-center 
                justify-center ml-3 mb-12  mt-3 h-[74px] w-[220px] px-6 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md
                  bg-[#606060]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
            aria-label="Sign up"
          >
            COMING SOON
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Creator;
