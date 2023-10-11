import React from "react";
import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "./constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [resmenu, setResMenu] = useState([{}]);
  const [resOffers, setResOffers] = useState([{}]);

  //get data from API
  useEffect(() => {
    getRestruarantInfo();
  }, []);

  async function getRestruarantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setRestaurant(json.data?.cards[0]?.card?.card?.info);
    if (restaurant) {
      const { name, avgRating, cloudinaryImageId, city, costForTwoMessage, sla } =
        restaurant;
    }
    setResOffers(json.data?.cards[1]);
    setResMenu(json.data?.cards[2]);
  }
  // return restuarant data
  return [restaurant, resmenu, resOffers];
};

export default useRestaurant;
