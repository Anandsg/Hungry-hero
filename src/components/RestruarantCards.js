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
    <div className="w-60 p-2 m-4 shadow-md hover:shadow-xl">
      <img
        alt={resData.data.name}
        src={CDN_URL + resData.data.cloudinaryImageId}
      />
      <div className="res-details">
        <h4 className="font-bold">{name}</h4>
        <div className="res-rating">
          <i className="fa fa-star"></i>
          <span>{avgRating}★</span>
        </div>
        <div className="font-light">
          {/* <div className="justify-center"> */}
            {resData.data.cuisines.join(", ")} - {deliveryTime} min
          </div>
          <div className="res-price">
            <span>₹{costForTwo / 100} For two</span>
            <button className="res-order">Order Now</button>
          </div>
        </div>
      </div>
  );
};

export default RestruarantCards;
