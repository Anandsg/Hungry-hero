import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestruarantMenu = () => {
  // Read dynamic URL params
  const { resId } = useParams();
  // CUSTOM HOOK
  const [restaurant, resmenu] = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (card) => {
    dispatch(addItem(card));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1> Res-ID : {resId} </h1>
        <h2> {restaurant.name} </h2>
        <img
          className="w-60 p-3 m-1 shadow-md hover:shadow-xl hover:scale-105 hover:shadow-slate-200 ransition duration-150 ease-in-out"
          src={CDN_URL + restaurant.cloudinaryImageId}
        />
        <h2> {restaurant.city} </h2>
        <p> {restaurant.costForTwoMessage} </p>
        <h2> {restaurant.avgRating} </h2>
      </div>
      <div className="m-4">
        <h2>
          Menu
          {resmenu?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
            (card) => {
              return (
                <li key={card?.card?.info.id}>
                  {card?.card?.info?.name} -
                  <button
                    className="p-1 m-2 bg-red-100"
                    onClick={() => addFoodItem(card.card.info)}
                  >
                    Add
                  </button>{" "}
                </li>
              );
            }
          )}
        </h2>
      </div>
    </div>
  );
};

export default RestruarantMenu;
