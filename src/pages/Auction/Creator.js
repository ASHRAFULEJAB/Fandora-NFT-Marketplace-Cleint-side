import React from "react";
import title from "../../assets/images/MORE FROM THIS CREATOR.png";
import title1 from "../../assets/images/Metaverse Avataars.png";
import pic1 from "../../assets/images/pic1.png";
import pic2 from "../../assets/images/pic2.png";
import pic3 from "../../assets/images/pic3.png";
import pic4 from "../../assets/images/pic4.png";
const Creator = () => {
  return (
    <div>
      <section class="bg-transparent dark:bg-transparent">
        <div class="container px-6 py-8 mx-auto">
          <img
            src={title}
            alt=""
            class="  text-2xl font-semibold ml-2 
            lg:ml-60 text-center text-gray-800 h-20 capitalize lg:text-3xl dark:text-white"
          ></img>
          <img
            src={title1}
            alt=""
            class="  text-2xl font-semibold ml-2 
            lg:ml-96 mt-10 text-center text-gray-800 h-6 capitalize lg:text-3xl dark:text-white"
          ></img>

          <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div class="w-full max-w-xs h-[408.32px] text-center bg-[#222125] rounded-xl">
              <img
                class="object-cover object-center w-full h-56 m-3 mx-auto rounded-lg"
                src={pic4}
                alt="avatar"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
                  CryptoPunk 3D #13
                </h3>
                <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">
                  3D cryptopunk
                </span>
                <div className="flex justify-between mt-6">
                  <div>
                    <h1 className="text-white font-bold">Auction</h1>
                    <p className="ml-3 text-[#52C1B9]">3h : 28m: 56s</p>
                  </div>
                  <div>
                    <h1 className="font-bold text-white"> 4.12 ETH</h1>
                    <p className="text-white"> floor price </p>
                  </div>
                  <div>
                    <h1 className="mr-3 text-white font-bold">$103,025</h1>
                    <p className="mr-3 text-[#24FF00]">-2.25%</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full max-w-xs h-[408.32px] text-center bg-[#222125] rounded-xl">
              <img
                class="object-cover object-center w-full h-56 m-3 mx-auto rounded-lg"
                src={pic1}
                alt="avatar"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
                  CryptoPunk 3D #13
                </h3>
                <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">
                  3D cryptopunk
                </span>
                <div className="flex justify-between mt-6">
                  <div>
                    <h1 className="text-white font-bold">Auction</h1>
                    <p className="ml-3 text-[#52C1B9]">3h : 28m: 56s</p>
                  </div>
                  <div>
                    <h1 className="font-bold text-white"> 4.12 ETH</h1>
                    <p className="text-white"> floor price </p>
                  </div>
                  <div>
                    <h1 className="mr-3 text-white font-bold">$103,025</h1>
                    <p className="mr-3 text-[#24FF00]">-2.25%</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full max-w-xs h-[408.32px] text-center bg-[#222125] rounded-xl">
              <img
                class="object-cover object-center w-full h-56 m-3 mx-auto rounded-lg"
                src={pic2}
                alt="avatar"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
                  CryptoPunk 3D #13
                </h3>
                <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">
                  3D cryptopunk
                </span>
                <div className="flex justify-between mt-6">
                  <div>
                    <h1 className="text-white font-bold">Auction</h1>
                    <p className="ml-3 text-[#52C1B9]">3h : 28m: 56s</p>
                  </div>
                  <div>
                    <h1 className="font-bold text-white"> 4.12 ETH</h1>
                    <p className="text-white"> floor price </p>
                  </div>
                  <div>
                    <h1 className="mr-3 text-white font-bold">$103,025</h1>
                    <p className="mr-3 text-[#FF0000]">-2.25%</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full max-w-xs h-[408.32px] text-center bg-[#222125] rounded-xl">
              <img
                class="object-cover object-center w-full h-56 m-3 mx-auto rounded-lg"
                src={pic3}
                alt="avatar"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
                  CryptoPunk 3D #13
                </h3>
                <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">
                  3D cryptopunk
                </span>
                <div className="flex justify-between mt-6">
                  <div>
                    <h1 className="text-white font-bold">Auction</h1>
                    <p className="ml-3 text-[#52C1B9]">3h : 28m: 56s</p>
                  </div>
                  <div>
                    <h1 className="font-bold text-white"> 4.12 ETH</h1>
                    <p className="text-white"> floor price </p>
                  </div>
                  <div>
                    <h1 className="mr-3 text-white font-bold">$103,025</h1>
                    <p className="mr-3 text-[#24FF00]">-2.25%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Creator;
