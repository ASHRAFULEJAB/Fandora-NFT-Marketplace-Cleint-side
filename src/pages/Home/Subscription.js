import React from "react";
import tgn2 from "../../assets/images/TGN_4 2.png";
import tgn1 from "../../assets/images/TGN_5 1.png";

const Subscription = () => {
  return (
    <div className="bg-[#1B1B1D] rounded-b-3xl relative lg:pb-20">
      {/* Make money for everybody */}
      <div className="lg:flex lg:mx-24 lg:ml-8 ml-6">
        <img src={tgn2} alt="" className="lg:h-42 lg:w-42 lg:mt-16" />
        <div className="text-[#FFFFFF] lg:mt-40 mt-10 lg:ml-20">
          <p className="lg:text-[16px] text-2xl font-semibold uppercase">
            Tokenised Crowdfunding
          </p>
          <h1 className="lg:text-[36px] font-bold mt-3 text-[#538EB6]">
            Create content. <br /> Make money for everybody.
          </h1>
          <p className="lg:text-[18px] mt-3 text-gray-400">
            With Fandora you can enable your loyal fanbase to bid <br /> for a
            share of the revenue from your next product or <br /> content
            offering to be launched over a stipulated time <br />
            period. This leads to an audience base that is even more <br />{" "}
            invested in you and your work, literally and figuratively.
          </p>
          <button
            to="/register"
            class="inline-flex items-center 
                justify-center ml-3   mt-6 h-[71px] w-[338px] px-6 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md text-[16px]
                  bg-gradient-to-r from-[#38A1BB] from-84.87% via-[#38A1BB] via-77.9% 
      to-[#604DBC] to-14.72%
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
            aria-label="Sign up"
          >
            <span className="mr-6">JOIN THE CONVERSATION</span>

            <svg
              className="ml-8"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-discord"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
                fill="white"
              ></path>{" "}
            </svg>
          </button>
        </div>
      </div>
      {/* subscription platform */}
      <div className="lg:flex lg:mx-22">
        <div className="text-[#FFFFFF] mt-10 lg:ml-32  ml-6">
          <p className="lg: text-[16px] text-2xl font-semibold uppercase">
            Talent content platform
          </p>
          <h1 className="lg:text-[36px] font-bold mt-3 text-[#538EB6]">
            Build your custom <br /> subscription platform
          </h1>
          <p className="lg:text-[18px] mt-3 text-gray-400">
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
            <span className="mr-6">JOIN THE CONVERSATION</span>
            <svg
              className="ml-8"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-discord"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
                fill="white"
              ></path>{" "}
            </svg>
          </button>
        </div>
        <img src={tgn1} alt="" className="lg:h-[548px] lg:w-[548px] lg:ml-20" />
      </div>
    </div>
  );
};

export default Subscription;
