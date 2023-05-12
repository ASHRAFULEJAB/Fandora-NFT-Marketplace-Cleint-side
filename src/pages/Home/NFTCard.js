import React from "react";
import futureTalent from "../../assets/images/image 342.png";
import headphone from "../../assets/images/device_electronicv2_5 1.png";
import insta from "../../assets/images/insta.png";
import ring from "../../assets/images/ring.png";
import gamePlayer from "../../assets/images/gameplayer.png";

const NFTCard = () => {
  return (
    <div>
      <section class="bg-transparent lg:mx-72">
        <div class="h-[22rem] bg-gray-100 dark:bg-transparent"></div>

        <div
          class="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96 
          grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3
          "
        >
          <div class="  mt-8 xl:mt-16  drop-shadow-2xl ">
            <div
              class="flex flex-col items-center p-4  sm:p-6 rounded-[50px] w-[286px] h-[383px]
               dark:border-gray-700 bg-[#FAF9FD] "
            >
              <img
                class="   h-36  object-cover w-full rounded-2xl aspect-square "
                src={futureTalent}
                alt=""
              />

              <div className="mt-4 text-center">
                <h1 class="mt-4 text-2xl font-bold text-gray-700 capitalize dark:text-[#1B1B1D]">
                  Future Talent <br /> NFT
                </h1>

                <p class="mt-2 text-gray-500 capitalize   dark:text-[#1B1B1D]">
                  Pre-buy rights to your social media content
                </p>
              </div>
            </div>
          </div>
          <div class="  mt-8 xl:mt-16  drop-shadow-2xl ">
            <div
              class="flex flex-col items-center p-4  sm:p-6 rounded-[50px] w-[286px] h-[383px]
               dark:border-gray-700 bg-[#FAF9FD] "
            >
              <img
                class="   h-36  object-cover w-full rounded-2xl aspect-square "
                src={headphone}
                alt=""
              />

              <div className="mt-4 text-center">
                <h1 class="mt-4 text-2xl font-bold text-gray-700 capitalize dark:text-[#1B1B1D]">
                  Product <br /> Placement NFT
                </h1>

                <p class="mt-2 text-gray-500 capitalize   dark:text-[#1B1B1D]">
                  Pre-buy rights to your product mentions{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="  mt-8 xl:mt-16  drop-shadow-2xl ">
            <div
              class="flex flex-col items-center p-4  sm:p-6 rounded-[50px] w-[286px] h-[383px]
               dark:border-gray-700 bg-[#FAF9FD] "
            >
              <img
                class="   h-36  object-cover w-full rounded-2xl aspect-square "
                src={insta}
                alt=""
              />

              <div className="mt-4 text-center">
                <h1 class="mt-4 text-2xl font-bold text-gray-700 capitalize dark:text-[#1B1B1D]">
                  Online <br /> Interaction NFT
                </h1>

                <p class="mt-2 text-gray-500 capitalize   dark:text-[#1B1B1D]">
                  Pre-buy rights to specific time periods for exclusive
                  interactions.
                </p>
              </div>
            </div>
          </div>
          <div class=" lg:ml-32 mt-8 xl:mt-16 drop-shadow-2xl ">
            <div
              class="flex flex-col items-center p-4  sm:p-6 rounded-[50px] w-[286px] h-[383px]
               dark:border-gray-700 bg-[#FAF9FD] "
            >
              <img
                class="   h-36  object-cover w-full rounded-2xl aspect-square "
                src={ring}
                alt=""
              />

              <div className="mt-4 text-center">
                <h1 class="mt-4 text-2xl font-bold text-gray-700 capitalize dark:text-[#1B1B1D]">
                  Digital Art <br /> NFT
                </h1>

                <p class="mt-2 text-gray-500 capitalize   dark:text-[#1B1B1D]">
                  Pre-buy rights to create digital art featuring you{" "}
                </p>
              </div>
            </div>
          </div>
          <div class=" lg:ml-32 mt-8 xl:mt-16 drop-shadow-2xl ">
            <div
              class="flex flex-col items-center p-4  sm:p-6 rounded-[50px] w-[286px] h-[383px]
               dark:border-gray-700 bg-[#FAF9FD] "
            >
              <img
                class="   h-36  object-cover w-full rounded-2xl aspect-square "
                src={gamePlayer}
                alt=""
              />

              <div className="mt-4 text-center">
                <h1 class="mt-4 text-2xl font-bold text-gray-700 capitalize dark:text-[#1B1B1D]">
                  Gaming <br /> NFT
                </h1>

                <p class="mt-2 text-gray-500 capitalize   dark:text-[#1B1B1D]">
                  Pre-buy rights to incorporate your digital avatar in a game or
                  product
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NFTCard;
