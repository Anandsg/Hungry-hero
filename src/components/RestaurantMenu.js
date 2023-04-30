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
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json); 
    setRestaurant(json.data?.cards[0]?.card?.card?.info);
    if (restaurant) {
      const { name, avgRating, cloudinaryImageId, city, costForTwoMessage } =
        restaurant;
      // destructured properties...
    }
  }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div>
        <h1> Res-ID : {resId} </h1>
        <h2> {restaurant.name} </h2>
        <img
          className="item-img"
          src={CDN_URL + restaurant.cloudinaryImageId}
        />
        <h2> {restaurant.city} </h2>
        <p> {restaurant.costForTwoMessage} </p>
        <h2> {restaurant.avgRating} </h2>
      </div>
      <div className="res-menu">
        <h2>
          Menu
          {console.log(
            restaurant?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
              ?.itemCards
          )}
          {restaurant?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
            (card) => {
              return (
                <li key={card?.card?.info.id}>{card?.card?.info?.name} </li>
              );
            }
          )}
        </h2>
      </div>
    </div>
  );
};

export default RestruarantMenu;
