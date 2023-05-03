import React from "react";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  //get data from API
  useEffect(() => {
    getRestruarantInfo();
  }, []);

  async function getRestruarantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9122238&lng=77.5923219&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data?.cards[0]?.card?.card?.info);
    if (restaurant) {
      const { name, avgRating, cloudinaryImageId, city, costForTwoMessage } =
        restaurant;
    }
  }
  // return restuarant data
  return restaurant;
};

export default useRestaurant;
