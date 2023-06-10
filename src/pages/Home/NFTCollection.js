import React, { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../../AuthContext/AuthProvider";
import NFTCollectionDetails from "./NFTCollectionDetails";

const NFTCollection = () => {
  const [productPage, setProductPage] = useState([]);
  const { loader, setLoader } = useContext(UserAuthContext);

  useEffect(() => {
    fetch("https://fandora-server-side.vercel.app/product-home")
      .then((res) => res.json())
      .then((data) => {
        setLoader();
        setProductPage(data);
      });
  }, []);
  return (
    <div>
      <section class="bg-transparent lg:mx-72 mt-32 lg:mt-0">
        <div class="h-[22rem] bg-gray-100 dark:bg-transparent mb-32">
          <h1
            className="bg-gradient-to-r from-[#604DBC] from-0%  to-[#15E8BA] to-100% uppercase
           text-center text-2xl font-bold lg:text-6xl text-transparent bg-clip-text mt-3"
          >
            top collections
          </h1>
          <div className="lg:flex lg:mt-2 mt-2 ">
            <input
              type="text"
              className="bg-[#07070F] 
               border-[4px] border-[#52C1B9] rounded-full lg:ml-36 py-3 px-20 lg:px-72"
              placeholder="Browse through 1000+ metaverse avataars, digital art, social media posts and more...  "
            />
          </div>
        </div>

        <div
          class="container px-6 py-10 mx-auto  -mt-72 sm:-mt-80 md:-mt-96 relative
          grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3
          "
        >
          {productPage.map((product) => (
            <NFTCollectionDetails
              key={product._id}
              product={product}
            ></NFTCollectionDetails>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NFTCollection;
