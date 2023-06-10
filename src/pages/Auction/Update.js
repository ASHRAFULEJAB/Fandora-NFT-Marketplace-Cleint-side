import React from "react";
import { Link } from "react-router-dom";

const Update = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#15E8BA] from-98.51%  
      to-[#604DBC] to-1.49% rounded-3xl lg:mx-32 mt-20 lg:p-10 text-center "
    >
      <h1 className="lg:text-[55px] text-2xl lg:mt-0 mt-3 font-bold uppercase">
        Get More Updates
      </h1>
      <p className="lg:text[20px] my-3">
        Join our mailing list to stay in the loop with our newest feature
        releases, NFT drops, and tips and tricks{" "}
      </p>
      <input
        type="email"
        className="bg-[#D9D9D9] 
               border-[4px]  text-[#6975B4] rounded-full lg:ml-36 py-3 px-20 lg:px-36"
        placeholder="Enter Email Here"
      />
      <Link to="/register">
        <button
          class="lg:inline-flex items-center 
                justify-center  h-14 w-[223px] lg:mb-0 mb-3 lg:mt-0 mt-3 px-12 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md
                  bg-[#1E1E2D]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
          aria-label="Sign up"
        >
          JOIN FANDORA
        </button>
      </Link>
    </div>
  );
};

export default Update;
