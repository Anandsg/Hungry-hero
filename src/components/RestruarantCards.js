import React from "react";
import { CDN_URL } from "../utils/constants";

const RestruarantCards = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    deliveryTime,
    cuisines,
    costForTwo,
  } = resData?.data;
  return (
    <div className="w-56 p-2 shadow-md hover:shadow-xl hover:scale-105 hover:shadow-slate-200 ransition duration-500 ease-in-out">
      <img
        alt={resData.data.name}
        src={CDN_URL + resData.data.cloudinaryImageId}
      />
      <div className="res-details px-2">
        <h4 className="font-bold">{name}</h4>
        <div className="">
          <span className="bg-green-500 text-white font-bold text-xs">
            ★ {avgRating}
          </span>
        </div>
        <div className="font-light text-xs">
          {resData.data.cuisines.join(", ")} - {deliveryTime} min
        </div>
        <div className="res-price">
          <span className="font-normal text-sm">₹{costForTwo / 100} For two</span>
        </div>
      </div>
    </div>
  );
};

export default RestruarantCards;

