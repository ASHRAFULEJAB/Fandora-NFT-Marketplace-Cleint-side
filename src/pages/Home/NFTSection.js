import React from "react";
import NFTCard from "./NFTCard";

const NFTSection = () => {
  return (
    <div className="bg-[#EFEDF5] rounded-t-3xl">
      <h1 className="text-center text-[90px] font-semibold text-[#222125] uppercase">
        Welcome to the Future <br />{" "}
        <span
          className="text-transparent bg-clip-text 
          bg-gradient-to-r from-[#604DBC] from-20%  to-[#15E8BA] to-90%"
        >
          Pre NFT Rights
        </span>
      </h1>
      <p className="text-center lg:mx-72 text-[#1B1B1D] text-[20px]">
        Imagine a real life auction, but everything is an NFT. <br /> Fandora is
        the first platform that enables creators to auction or sell their NFT{" "}
        <br />
        rights to their audience. These pre NFT rights enable your audience to
        build <br />
        content around you, pay you, and also share royalties. With Fandora,
        creators can <br />
        do all this easily - without all the tech-speak.
      </p>
      <h1 className="text-center mt-10 text-[#438ABC] text-[20px] font-semibold">
        These are the different types of NFT rights you can sell
      </h1>
      {/* NFT CARDS  */}
      <NFTCard />
    </div>
  );
};

export default NFTSection;
