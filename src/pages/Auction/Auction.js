import React from "react";
import Update from "./Update";
import CheckOut from "./CheckOut";
import Creator from "./Creator";

const Auction = () => {
  return (
    <div>
      <h1 className="mb-20">nb nm</h1>
      <Creator></Creator>
      <CheckOut />
      <Update />
    </div>
  );
};

export default Auction;
