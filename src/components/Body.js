import React from "react";
import RestruarantCards from "./RestruarantCards";
import { useState, useEffect} from "react";
import resList from "../utils/mockData";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filterData;
}
const Body = () => {
  const [listOfRestuarants, setlistOfRestuarants] = useState(resList);
  const [searchText, setSearchText] = useState("");

// useEffect is HOOk it a call back function, this will be called not immediately but whenever useEffect wants to be called
// when we have empty dependecy array => once after the render it will be called
// dependecy array => once after initial changes render + everytime after render (my searchText changes)

useEffect (() => {
  // Fetch APT
  getRestaurants();
}, []);

async function getRestaurants () {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  console.log(json);

  //optional chaininng
  setlistOfRestuarants(json?.data?.cards[2]?.data?.data?.cards);
}
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, listOfRestuarants);
            setlistOfRestuarants(data);
          }}
        >
          search
        </button>
      </div>

      <div className="body">
        <div className="filter-btn">
          <span
            className="filter-icon"
            onClick={() => {
              const filteredList = listOfRestuarants.filter(
                (res) => res.data.avgRating > 4
              );
              setlistOfRestuarants(filteredList);
            }}
          >
            Rating: 4.0+
          </span>
        </div>

        <div className="res-container">
          {listOfRestuarants.map((restaurant) => (
            <RestruarantCards key={restaurant.data.id} resData={restaurant} />
          ))} 
        </div> 
      </div>
    </>
  );
};

export default Body;
