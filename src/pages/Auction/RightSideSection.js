import React from "react";
import vector from "../../assets/images/Vector 45.png";


const RightSideSection = () => {
  return (
    <div>
      <div className="lg:flex lg:mt-0 mt-10">
        <h2 className="text-gray-400 lg:text-[16px]">Owned by </h2>
        <h1 className="text-[#52C1B9] lg:text-[20px] lg:ml-3 ml-2 ">PSG</h1>
        <button
          to="/register"
          class="lg:inline-flex items-center 
                justify-center  h-10 lg:w-[165px] lg:mb-0 mb-3 lg:ml-48 ml-16
                 lg:mt-0 mt-3 px-16 font-medium tracking-wide
                 text-[#52C1B9] transition duration-200 rounded-2xl shadow-md
                 border-[#52C1B9] border
                  bg-transparent
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
          aria-label="Sign up"
        >
          <span className="m-3">Mark as Favourite</span>
        </button>
      </div>
      <h1 className="text-white font-bold lg:text-4xl text-xl mt-3">
        Lionel Messi: The GOAT
      </h1>
      <p className="text-[#52C1B9] lg:text-[20px] font-semibold">
        ChromieMIX #7615
      </p>
      <div className="relative">
        <img src={vector} alt="" className="mt-6" />
        <div className="absolute lg:top-16 top-6 bottom-1 left-4">
          <p className="text-gray-200 lg:text-2xl ">
            Sale ends 25 December 2022 at 1:57 am GMT+5:30
          </p>
          <span className="text-gray-400 lg:mt-6"> Current Price</span>
          <p className="text-white font-bold lg:text-3xl lg:mb-6 ">
            15.89 ETH <span className="text-gray-400 text-xs">$111,111.11</span>
          </p>
          <button
            to="/register"
            class="inline-flex items-center 
                justify-center lg:h-[74px] lg:w-[200px] px-8 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md
                  bg-gradient-to-r from-[#38A1BB] from-14.72% via-[#38A1BB] via-77.9% to-[#604DBC] to-84.87% ...
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
            aria-label="Sign up"
          >
            BUY NOW
          </button>
          <button
            to="/register"
            class="inline-flex items-center 
                justify-center ml-3 mb-12  mt-3 lg:h-[74px] lg:w-[200px] px-6 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md
                  bg-transparent border-[4px] border-[#74B4B3]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
            aria-label="Sign up"
          >
            MAKE AN OFFER
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSideSection;
