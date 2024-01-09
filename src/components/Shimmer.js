import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const Shimmer = () => {
  return (
    <div
      className="flex flex-wrap gap-6 py-8 justify-center"
      data-testid="shimmer"
    >
      {Array.from({ length: 20 }).map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

const ShimmerCard = () => {
  return (
    <div className="flex bg-white flex-col gap-2 m-auto md:m-0">
      <div className="rounded-lg overflow-hidden shimmer-bg">
        <Skeleton width={"200px"} height={"155px"} />
      </div>
      <div className="flex gap-2">
        <Skeleton width={"90px"} height={"25px"} />
        <Skeleton width={"100px"} height={"25px"} />
      </div>
      <div className="flex gap-2">
        <Skeleton width={"100px"} height={"25px"} />
        <Skeleton width={"60px"} height={"25px"} />
      </div>
    </div>
  );
};

export default Shimmer;
