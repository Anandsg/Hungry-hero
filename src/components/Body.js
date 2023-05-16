import React from "react";
import RestruarantCards from "./RestruarantCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import backend from "..utils/backend";

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

    setAlllistOfRestuarants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredlistOfRestuarants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h3> user is offline</h3>;
  }

  // avoid rendering component (Early)
  if (!AlllistOfRestuarants) return null;

  return AlllistOfRestuarants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-3 flex items-center border-black">
        <input
          type="text"
          className="p-1 m-2 border border-gray-300 rounded-md"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="bg-yellow-400 text-gray-800 p-1 m-2 rounded-md shadow-md hover:text-white hover:bg-yellow-500 transition duration-200 ease-in-out"
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
        {filteredlistOfRestuarants?.length === 0 && searchText !== "" && (
          <h2 className="font-bold text-justify">
            {" "}
            Oh! Your item did not found{" "}
          </h2>
        )}

        <span
          className="bg-yellow-400 text-gray-800 p-1 m-2 rounded-md shadow-md transition duration-200 ease-in-out hover:bg-yellow-500 hover:text-white"
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

      <div className="px-28 grid grid-cols-2 md:grid md:grid-cols-5 gap-4 ">
        {filteredlistOfRestuarants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.data.id}
            key={restaurant.data.id}
          >
            {" "}
            <RestruarantCards key={restaurant.data.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
