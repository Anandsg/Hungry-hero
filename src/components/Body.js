// import React, { useState } from "react";
import React from "react";
import RestruarantCards from "./RestruarantCards";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  
  const [listOfRestuarants, setlistOfRestuarants] = useState(resList);

  return (
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
  );
};

export default Body;
