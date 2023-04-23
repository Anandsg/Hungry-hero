import React from "react";
import { useState, useEffect } from "react";
// CUSTOM HOOK

const useRestaurant = (resid) => {
  const [restaurants, setRestaurants] = useState([{}]);
  const [resmenu, setResMenu] = useState([{}]);

  useEffect(() => {
    getRestaurantsID();
  }, []);

  async function getRestaurantsID() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=" +
        resid +
        "&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setRestaurants(json.data?.cards[0]?.card?.card?.info); //47589
    // console.log(restaurants);
    setResMenu(json.data?.cards[2]);
    // console.log(resmenu);
  }

  return [restaurants, resmenu];
};

export default useRestaurant;