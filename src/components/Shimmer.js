import React from "react";

const Shimmer = () => {
  return (
    <div className="res-container">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card">
            {" "}
            <div className="shimmer-animation"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
