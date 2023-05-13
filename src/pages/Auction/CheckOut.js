import React from "react";
import title from "../../assets/images/title.png";
import image18 from "../../assets/images/image 18.png";
import image22 from "../../assets/images/image 22.png";
import image23 from "../../assets/images/image 23.png";
import image26 from "../../assets/images/image 26.png";
import image27 from "../../assets/images/image 27.png";
import image28 from "../../assets/images/image 28.png";
import image29 from "../../assets/images/image 29.png";
import image31 from "../../assets/images/image 31.png";
import image30 from "../../assets/images/image 30.png";

const CheckOut = () => {
  return (
    <div>
      <section class="bg-transparent dark:bg-transparent">
        <div class="container px-6 py-8 mx-auto">
          <img
            src={title}
            alt=""
            class="  text-2xl font-semibold ml-2 lg:ml-60 text-center text-gray-800 capitalize lg:text-3xl dark:text-white"
          ></img>

          <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:ml-56 ">
            {/* Card components */}
            <div class="w-full max-w-xs text-center bg-[#222125] rounded-xl">
              <div className="flex ml-8 mt-3">
                <div>
                  <img
                    class="object-cover object-center w-full h-24 mb-2 mx-auto rounded-lg"
                    src={image18}
                    alt="avatar"
                  />
                  <img
                    class="object-cover object-center w-full h-24  mx-auto rounded-lg"
                    src={image22}
                    alt="avatar"
                  />
                </div>
                <img
                  class="object-cover object-center w-1/2 h-50 ml-2 rounded-lg"
                  src={image23}
                  alt="avatar"
                />
              </div>

              <div class="mt-2">
                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
                  By Studios
                </h3>
              </div>
            </div>
            <div class="w-full max-w-xs text-center bg-[#222125] rounded-xl">
              <div className="flex ml-8 mt-3">
                <div>
                  <img
                    class="object-cover object-center w-full h-24 mb-2 mx-auto rounded-lg"
                    src={image27}
                    alt="avatar"
                  />
                  <img
                    class="object-cover object-center w-full h-24  mx-auto rounded-lg"
                    src={image26}
                    alt="avatar"
                  />
                </div>
                <img
                  class="object-cover object-center w-1/2 h-50 ml-2 rounded-lg"
                  src={image28}
                  alt="avatar"
                />
              </div>

              <div class="mt-2">
                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
                  By Creators
                </h3>
              </div>
            </div>
            <div class="w-full max-w-xs text-center bg-[#222125] rounded-xl">
              <div className="flex ml-8 mt-3">
                <div>
                  <img
                    class="object-cover object-center w-full h-24 mb-2 mx-auto rounded-lg"
                    src={image29}
                    alt="avatar"
                  />
                  <img
                    class="object-cover object-center w-full h-24  mx-auto rounded-lg"
                    src={image31}
                    alt="avatar"
                  />
                </div>
                <img
                  class="object-cover object-center w-1/2 h-50 ml-2 rounded-lg"
                  src={image30}
                  alt="avatar"
                />
              </div>

              <div class="mt-2">
                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
                  By Brands
                </h3>
              </div>
            </div>
          </div>
          <div className="text-[#FFFFFF] text-center mt-10">
            <button
              to="/register"
              class="inline-flex items-center 
                justify-center ml-3 mb-12  mt-3 h-[74px] w-[220px] px-6 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md
                  bg-transparent border-[2px] border-[#74B4B3]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
            >
              SEE MORE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckOut;
