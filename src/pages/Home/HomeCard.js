import React from "react";
import simplicity from "../../assets/images/Simplicity.png";
import medel from "../../assets/images/Medal.png";
import token from "../../assets/images/Token.png";
import wallet from "../../assets/images/Wallet.png";
import content from "../../assets/images/Like.png";

const HomeCard = () => {
  return (
    <div className="mt-10">
      <div className="">
        <img
          src={simplicity}
          alt=""
          className="items-center  justify-center  lg:w-90 h-20 lg:ml-80 ml-3"
        />
        <h1 className="text-white text-[25px] ml-6 lg:ml-56">
          We take care of everything so the artists can focus on what they do
          best. Create art.
        </h1>

        {/* Card Components */}

        <section class="bg-transparent lg:mx-72">
          <div class="h-[22rem] bg-gray-100 dark:bg-transparent"></div>

          <div
            class="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96 relative
          grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3
          "
          >
            <div class="  mt-8 xl:mt-16  relative">
              <div
                class="flex flex-col items-center p-4 border sm:p-6 rounded-[50px] w-[286px] h-[396px]
               dark:border-gray-700 bg-[#222125] "
              >
                <img
                  class="  absolute h-28 w-28 left-20 -top-10 "
                  src={medel}
                  alt=""
                />

                <div className="mt-12 text-center">
                  <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    Pre-NFT Rights
                  </h1>

                  <p class="mt-2 text-gray-500 capitalize   dark:text-white">
                    NFT rights enable your audience to build content around you
                    and pay you as well as share royalties.
                  </p>
                </div>
                <button
                  to="/register"
                  class="inline-flex items-center 
                justify-center ml-3  mt-14 h-12 w-[213px] px-6 font-medium tracking-wide
                 text-[#00CDAC] transition duration-200 rounded-full shadow-md
                  bg-[#2E2D32]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                >
                  Beta Launch Dec 13
                </button>
              </div>
            </div>
            <div class="  mt-8 xl:mt-16  relative">
              <div
                class="flex flex-col items-center p-4 border sm:p-6 rounded-[50px] w-[286px] h-[396px]
               dark:border-gray-700 bg-[#222125] "
              >
                <img
                  class="  absolute h-28 w-28 left-20 -top-10 "
                  src={token}
                  alt=""
                />

                <div className="mt-12 text-center">
                  <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    Talent Tokens
                  </h1>

                  <p class="mt-2 text-gray-500 capitalize   dark:text-white">
                    Talent Token are tied to creator’s growth. Creators can
                    reward supporters that want to join on their journey.
                  </p>
                </div>
                <button
                  to="/register"
                  class="inline-flex items-center 
                justify-center ml-3  mt-14 h-12 w-[177px] px-6 font-medium tracking-wide
                 text-[#8E79F3] transition duration-200 rounded-full shadow-md
                  bg-[#2E2D32]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                >
                  Coming Soon
                </button>
              </div>
            </div>
            <div class="  mt-8 xl:mt-16  relative">
              <div
                class="flex flex-col items-center p-4 border sm:p-6 rounded-[50px] w-[286px] h-[396px]
               dark:border-gray-700 bg-[#222125] "
              >
                <img
                  class="  absolute h-28 w-28 left-20 -top-10 "
                  src={wallet}
                  alt=""
                />

                <div className="mt-12 text-center">
                  <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    Tokenised Crowdfunding
                  </h1>

                  <p class="mt-2 text-gray-500 capitalize   dark:text-white">
                    Tokenised crowdfunding allows creators to raise capital to
                    improve the quality of their content.
                  </p>
                </div>
                <button
                  to="/register"
                  class="inline-flex items-center 
                justify-center ml-3  mt-6 h-12 w-[177px] px-6 font-medium tracking-wide
                 text-[#8E79F3] transition duration-200 rounded-full shadow-md
                  bg-[#2E2D32]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                >
                  Coming Soon
                </button>
              </div>
            </div>
            <div class=" lg:ml-32 mt-8 xl:mt-16  relative">
              <div
                class="flex flex-col items-center p-4 border sm:p-6 rounded-[50px] w-[286px] h-[396px]
               dark:border-gray-700 bg-[#222125] "
              >
                <img
                  class="  absolute h-28 w-28 left-20 -top-10 "
                  src={content}
                  alt=""
                />

                <div className="mt-12 text-center">
                  <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    Talent Content Platform
                  </h1>

                  <p class="mt-2 text-gray-500 capitalize   dark:text-white">
                    A platform that allows creators to create and have direct
                    control of audience revenues.
                  </p>
                </div>
                <button
                  to="/register"
                  class="inline-flex items-center 
                justify-center ml-3  mt-12 h-12 w-[177px] px-6 font-medium tracking-wide
                 text-[#8E79F3] transition duration-200 rounded-full shadow-md
                  bg-[#2E2D32]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                >
                  Coming Soon
                </button>
              </div>
            </div>
            <div class=" lg:ml-32 mt-8 xl:mt-16  relative">
              <div
                class="flex flex-col items-center p-4 border sm:p-6 rounded-[50px] w-[286px] h-[396px]
               dark:border-gray-700 bg-[#222125] "
              >
                <div className="mt-12 text-center">
                  <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    NFT Marketplace
                  </h1>

                  <p class="mt-2 text-gray-500 capitalize   dark:text-white">
                    Native NFT marketplace that allows creators and pre-NFT
                    right holders to create and sell licensed NFTs.
                  </p>
                </div>
                <button
                  to="/register"
                  class="inline-flex items-center 
                justify-center ml-3  mt-14 h-12 w-[213px] px-6 font-medium tracking-wide
                 text-[#00CDAC] transition duration-200 rounded-full shadow-md
                  bg-[#2E2D32]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                >
                  Beta Launch Dec 13
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeCard;
