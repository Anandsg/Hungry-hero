import React from "react";
import RestruarantCards from "./RestruarantCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [AlllistOfRestuarants, setAlllistOfRestuarants] = useState([]);
  const [filteredlistOfRestuarants, setfilteredlistOfRestuarants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // Fetch API
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setAlllistOfRestuarants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredlistOfRestuarants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <h3 className="flex flex-col items-center justify-center font-serif h-screen bg-gray-100 text-2xl font-bold text-red-500 mb-4">
        {" "}
        it appears that the user is currently offline
      </h3>
    );
  }

  // avoid rendering component (Early)
  if (!AlllistOfRestuarants) return null;

  return AlllistOfRestuarants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-2 ml-auto border-black">
        {filteredlistOfRestuarants?.length === 0 && searchText !== "" ? (
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-center font-serif">
              The restaurant you're searching for doesn't exist.
            </h2>
            <button
              className="text-xs font-medium shadow-md px-2 py-2 outline-none m-2 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700 cursor-pointer"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Go back to Home
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center">
              <input
                type="text"
                className="w-64 text-xs border border-gray-300 shadow-md focus:border-gray-500 transition-all duration-300 px-2 py-2 outline-none  rounded"
                placeholder="search restuarants"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />

              <button
                data-testid="search-btn"
                className="text-xs font-medium shadow-md px-2 py-2 outline-none m-2 right-10 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700"
                onClick={() => {
                  const data = filterData(searchText, AlllistOfRestuarants);
                  setfilteredlistOfRestuarants(data);
                  if (data.length === 0 && searchText !== "") {
                    setfilteredlistOfRestuarants([]);
                  }
                }}
              >
                Search
              </button>

              <span
                className="text-xs font-medium shadow-md px-2 py-2 outline-none m-2 right-10 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700 cursor-pointer"
                onClick={() => {
                  const filteredList = AlllistOfRestuarants.filter(
                    (res) => res.data.avgRating > 4
                  );
                  setfilteredlistOfRestuarants(filteredList);
                }}
              >
                Rating: 4.0+
              </span>
            </div>
          </>
        )}
      </div>

      <div className="px-28 grid grid-cols-2 md:grid md:grid-cols-5 gap-4 ">
        {filteredlistOfRestuarants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant?.info.id}
            key={restaurant?.info.id}
          >
            {" "}
            <RestruarantCards
              key={restaurant?.info.id}
              resData={restaurant?.info}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
