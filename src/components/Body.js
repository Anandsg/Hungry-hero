import React from "react";
import RestruarantCards from "./RestruarantCards";
import { useState, useEffect } from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  // Making copy of a data
  const [AlllistOfRestuarants, setAlllistOfRestuarants] = useState([]);
  const [filteredlistOfRestuarants, setfilteredlistOfRestuarants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  // useEffect is HOOk it's a call back function, this will be called not immediately but whenever useEffect wants to be called
  // when we have empty dependecy array => once after the render it will be called
  // dependecy array => once after initial changes render + everytime after render (my searchText changes)

  useEffect(() => {
    // Fetch APT
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    //optional chaininng
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
      <div className="search-container p-5">
        <input
          type="text"
          className="p-2 m-2"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="bg-yellow-400 text-gray-800 p-2 px-4 m-3 rounded-md shadow-md hover:bg-yellow-500 transition duration-200 ease-in-out"
          onClick={() => {
            const data = filterData(searchText, AlllistOfRestuarants);
            setfilteredlistOfRestuarants(data);
            if (data.length === 0 && searchText !== "") {
              setfilteredlistOfRestuarants([]);
            }
          }}
        >
          {/* console.loh)fetch) */}
          search 
        </button>
        {filteredlistOfRestuarants?.length === 0 && searchText !== "" && (
          <h2> Oh! Your item did not found </h2>
        )}
      </div>

      <div className="body">
        <div className="filter-btn">
          <span
            className="filter-icon"
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
        <div className="flex flex-wrap">
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
      </div>
    </>
  );
};

export default Body;
