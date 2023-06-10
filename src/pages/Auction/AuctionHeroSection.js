import React from 'react';
import cardoutline from '../../assets/images/Card Outline.png'
import graphy2 from '../../assets/images/giphy 2.png'
import rectengle from '../../assets/images/Rectangle 4366.png'
import RightSideSection from './RightSideSection';
import { toast } from 'react-hot-toast';

const AuctionHeroSection = () => {
    return (
      <div className="lg:mx-20 lg:flex">
        {/* Left Side Hero section */}
        <div>
          <div className="relative">
            <p className="text-white absolute top-4 left-4">Avataars</p>
            <img src={cardoutline} alt="" />
            <img
              src={graphy2}
              alt=""
              className="absolute bottom-20 lg:w-[480px] lg:h-[270px] left-2"
            />
          </div>
          <div>
            <div className="relative">
              <img src={rectengle} alt="" className="mt-4" />
              <p className="text-white text-[24px] font-semibold absolute bottom-5 left-6">
                Description
              </p>
            </div>
            <div className="relative">
              <img src={rectengle} alt="" className="mt-4" />
              <p className="text-white text-[24px] font-semibold absolute bottom-5 left-6">
                Rights Available
              </p>
            </div>
            <div className="relative">
              <img src={rectengle} alt="" className="mt-4" />
              <p className="text-white text-[24px] font-semibold absolute bottom-5 left-6">
                Utilities Offered
              </p>
            </div>
            <div>
              <input
                type="text"
                className="bg-transparent
               border-[4px] border-[#52C1B9]  text-white rounded-full mt-4 py-3 px-20 lg:px-36"
                placeholder="Have a Question?"
              />

              <button
              onClick={()=>{
                toast.success("Your Query has been submitted!Thank You..")
              }}
                to="/register"
                class="lg:inline-flex items-center 
                justify-center  h-14 w-[223px] lg:mb-0 mb-3 lg:mt-0 mt-3 px-12 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md
                  bg-[#52C1B9]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
              >
                POST A QUERY
              </button>
            </div>
          </div>
        </div>
        {/* Right side Section */}
        <RightSideSection />
      </div>
    );
};

export default AuctionHeroSection;