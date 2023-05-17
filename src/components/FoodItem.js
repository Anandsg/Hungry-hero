import React from "react";
import { CDN_URL } from "../utils/constants";

const FoodItem = ({ name, description, imageId, price }) => {
  return (
    <div>
      <img className="p-2 m-4 w-60" src={CDN_URL + imageId} />
      <div className="m-4 res-details px-2">
        <h4 className="font-serif m-4 ">{name}</h4>
        <h3>{description}</h3>
        <div className="m-4  res-price">
          <span className="font-normal text-sm m-4 ">₹{price / 100}</span>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
