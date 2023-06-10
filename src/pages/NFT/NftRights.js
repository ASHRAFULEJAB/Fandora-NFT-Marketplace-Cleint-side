import React, { useContext, useEffect, useState } from "react";
import Lottie from "lottie-react";
import comingsoon from "../../assets/coming-soon.json";
import { UserAuthContext } from "../../AuthContext/AuthProvider";
import NFTRightDetails from "./NFTRightDetails";
const NftRights = () => {
  const [productPage, setProductPage] = useState([]);
  const { loader, setLoader } = useContext(UserAuthContext);

  useEffect(() => {
    fetch("https://fandora-server-side.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setLoader();
        setProductPage(data);
      });
  }, []);
  return (
    <div className="">
      <section class="bg-transparent lg:mx-72">
        <div class="h-[22rem] bg-gray-100 dark:bg-transparent mb-20">
          <h1 className="text-black">Welome to Our Menu</h1>
        </div>

        <div
          class="container px-6 py-10 mx-auto  -mt-72 sm:-mt-80 md:-mt-96 relative
          grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3
          "
        >
          {productPage.map((product) => (
            <NFTRightDetails
              key={product._id}
              product={product}
            ></NFTRightDetails>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NftRights;
