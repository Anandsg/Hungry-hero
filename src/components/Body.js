// import React, { useState } from "react";
import React from "react";
import RestruarantCards from "./RestruarantCards";
import { useState } from "react";
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
