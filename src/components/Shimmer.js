import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const Shimmer = () => {
  return (
    <div
      className="flex flex-wrap gap-6 py-8 justify-center"
      data-testid="shimmer"
    >
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
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

// export const ShimmerMenu = () => {
//   return (
//     <div className="w-2/3 my-2 m-auto">
//       <div className="flex justify-between flex-col md:flex-row">
//         <div className="">
//           <Skeleton width={"250px"} height={"25px"} />
//           <Skeleton width={"250px"} height={"25px"} />
//           <Skeleton width={"250px"} height={"25px"} />
//           <Skeleton width={"250px"} height={"25px"} />
//         </div>
//         <Skeleton width={"250px"} height={"125px"} />
//       </div>
//       <div className="my-4">
//         <Skeleton width={"300px"} height={"35px"} />
//       </div>
//       <div className="flex justify-between mb-4 flex-col md:flex-row ">
//         <div className="">
//           <Skeleton width={"300px"} height={"25px"} />
//           <Skeleton width={"150px"} height={"25px"} />
//         </div>
//         <Skeleton width={"120px"} height={"70px"} />
//       </div>
//       <div className="flex justify-between mb-4 flex-col md:flex-row">
//         <div className="">
//           <Skeleton width={"300px"} height={"25px"} />
//           <Skeleton width={"150px"} height={"25px"} />
//         </div>
//         <Skeleton width={"120px"} height={"70px"} />
//       </div>
//     </div>
//   );
// };
export default Shimmer;
