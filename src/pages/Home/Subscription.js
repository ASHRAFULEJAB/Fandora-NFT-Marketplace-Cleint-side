import React from "react";
import tgn2 from "../../assets/images/TGN_4 2.png";
import tgn1 from "../../assets/images/TGN_5 1.png";

const Subscription = () => {
  return (
    <div className="bg-[#1B1B1D] rounded-b-3xl relative pb-20">
      {/* Make money for everybody */}
      <div className="lg:flex lg:mx-24">
        <img src={tgn2} alt="" className="lg:h-42 lg:w-42 mt-16" />
        <div className="text-[#FFFFFF] mt-40 lg:ml-20">
          <p className="text-[16px] font-semibold uppercase">
            Tokenised Crowdfunding
          </p>
          <h1 className="text-[36px] font-bold mt-3 text-[#538EB6]">
            Create content. <br /> Make money for everybody.
          </h1>
          <p className="text-[18px] mt-3 text-gray-400">
            With Fandora you can enable your loyal fanbase to bid <br /> for a
            share of the revenue from your next product or <br /> content
            offering to be launched over a stipulated time <br />
            period. This leads to an audience base that is even more <br />{" "}
            invested in you and your work, literally and figuratively.
          </p>
          <button
            to="/register"
            class="inline-flex items-center 
                justify-center ml-3  mt-6 h-[71px] w-[338px] px-6 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md text-[16px]
                  bg-gradient-to-r from-[#38A1BB] from-84.87% via-[#38A1BB] via-77.9% 
      to-[#604DBC] to-14.72%
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
            aria-label="Sign up"
          >
            JOIN THE CONVERSATION
          </button>
        </div>
      </div>
      {/* subscription platform */}
      <div className="lg:flex lg:mx-22">
        <div className="text-[#FFFFFF] mt-10 lg:ml-32">
          <p className="text-[16px] font-semibold uppercase">
            Talent content platform
          </p>
          <h1 className="text-[36px] font-bold mt-3 text-[#538EB6]">
            Build your custom <br /> subscription platform
          </h1>
          <p className="text-[18px] mt-3 text-gray-400">
            Build your custom subscription platform <br /> Create your own
            content and subscription engine and <br /> have direct control of
            audience revenues. Fandora gives <br /> you access to
            state-of-the-art No-Code content platform <br /> which enables you
            to raise subscriptions as well as mint <br /> NFTs
          </p>
          <button
            to="/register"
            class="inline-flex items-center 
                justify-center ml-3  mt-6 h-[71px] w-[338px] px-6 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md text-[16px]
                  bg-gradient-to-r from-[#38A1BB] from-84.87% via-[#38A1BB] via-77.9% 
      to-[#604DBC] to-14.72%
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
            aria-label="Sign up"
          >
            JOIN THE CONVERSATION
          </button>
        </div>
        <img src={tgn1} alt="" className="lg:h-[548px] lg:w-[548px] lg:ml-20" />
      </div>
    </div>
  );
};

export default Subscription;
