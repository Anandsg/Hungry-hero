import React from "react";
import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "./constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [resmenu, setResMenu] = useState([{}]);

  //get data from API
  useEffect(() => {
    getRestruarantInfo();
  }, []);

  async function getRestruarantInfo() {
  const data = await fetch(FETCH_MENU_URL + resId);
  // const json = await data.json();
  // async function getRestruarantInfo() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=" +
  //       resId +
  //       "&submitAction=ENTER"
  //   );
    // console.log(json);
    const json = await data.json();
    setRestaurant(json.data?.cards[0]?.card?.card?.info);
    if (restaurant) {
      const { name, avgRating, cloudinaryImageId, city, costForTwoMessage } =
        restaurant;
    }
    setResMenu(json.data?.cards[2]);
  }
  // return restuarant data
  return [restaurant, resmenu];
};

export default useRestaurant;
