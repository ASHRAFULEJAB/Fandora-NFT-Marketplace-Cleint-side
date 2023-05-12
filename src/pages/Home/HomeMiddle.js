import React from "react";
import image1 from "../../assets/images/Image 3.png";
import image2 from "../../assets/images/unnamed 2.png";
import image3 from "../../assets/images/image 2.png";
import image4 from "../../assets/images/unnamed 3.png";
const HomeMiddle = () => {
  return (
    <div
      className=" lg:mt-0 mt-64 mx-10 lg:mx-36 rounded-2xl 
      bg-gradient-to-r from-[#15E8BA] from-98.51%  to-[#604DBC] to-1.49% lg:p-6"
    >
      <div className="lg:flex">
        <div className=" lg:ml-20">
          <h1 className="lg:text-[35px] text-2xl lg:ml-0 ml-10 lg:mt-0 mt-12 font font-bold">
            Pre-NFT Content and <br /> Rights Marketplace{" "}
          </h1>
          <p className="text-wrap lg:text-[23px] lg:ml-0 ml-10 font-medium">
            A first of its kind platform that <br /> discovers and supports
            global talent <br /> across multiple domains, now live!{" "}
          </p>
          <button
            to="/register"
            class="inline-flex items-center 
                justify-center lg:ml-3 ml-10 lg:mb-0 mb-6  mt-3 h-12 px-10 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md
                  bg-[#1E1E2D]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
            aria-label="Sign up"
          >
            CHECK IT OUT
          </button>
        </div>
        <div className="lg:ml-20 relative z-50">
          <img className="absolute top-10 " src={image1} alt="" />
          <img
            src={image2}
            alt=""
            className="absolute top-8 left-6 z-10 w-64 h-72"
          />
          <img
            src={image3}
            alt=""
            className=" absolute  left-16 top-10 z-10  w-64 h-72"
          />
          <img
            src={image4}
            alt=""
            className=" relative  left-10  z-50 top-0 bottom-10 w-52 h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeMiddle;
