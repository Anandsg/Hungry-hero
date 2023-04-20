import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestruarantMenu = () => {
  // Read dynamic URL params
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestruarantInfo();
  }, []);

  async function getRestruarantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5270362&lng=77.13593279999999&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data?.cards[0]?.card?.card?.info);
  }

  //   return !restaurant ? (
  //     <Shimmer />
  //   ) : (
  return (
    <div>
      <h2>restaurant id: {resId}</h2>
      {restaurant ? (
        <div>
          <h1>{restaurant.name}</h1>
          <img src={CDN_URL + restaurant.cloudinaryImageId}></img>
          <h3>{restaurant.city}</h3>
          <p>{restaurant.costForTwoMessage}</p>
          <p>{restaurant.cuisines}</p>
          <h5>{restaurant.avgRating}</h5>
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default RestruarantMenu;
