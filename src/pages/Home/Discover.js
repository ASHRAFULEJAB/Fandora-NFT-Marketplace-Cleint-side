import React from "react";
import unamed1 from "../../assets/images/unnamed 1.png";
import unamed2 from "../../assets/images/unnamed 2.png";
import { Link } from "react-router-dom";

const Discover = () => {
  return (
    <div className=" bg-[#FFFFFF] lg:mx-48 rounded-3xl relative z-28 ">
      <div className="lg:flex lg:ml-0 ml-6 ">
        <div className="lg:m-16  ">
          <h1 className="font-bold text-2xl">
            Discover and sell <br /> your own NFTs{" "}
          </h1>
          <p className="lg:text-[18px] my-3">
            Join fandora and support outstanding global <br /> talent across
            multiple domains.
          </p>
          <Link to="/register">
            <button
              class="inline-flex items-center 
                justify-center ml-3  lg:mt-6 mt-3 lg:mb-0 mb-10 lg:h-[71px] h-[64px] lg:w-[209px] px-6 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md text-[16px]
                  bg-gradient-to-r from-[#38A1BB] from-84.87% via-[#38A1BB] via-77.9% 
      to-[#604DBC] to-14.72%
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
            >
              JOIN FANDORA
            </button>
          </Link>
        </div>
        <div className="flex lg:ml-6 relative">
          <img
            src={unamed1}
            alt=""
            className="lg:w-[241px] w-[141px] lg:h-[294px] absolute top-24"
          />
          <img
            src={unamed2}
            alt=""
            className="lg:w-[241px] w-[141px] lg:h-[294px] relative lg:left-64 left-40 lg:bottom-16 bottom-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
