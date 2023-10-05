import React from "react";
import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";

const ResShimmer = () => {
  return (
    <div className="flex justify-center"> {/* Align to center */}
      <div className="flex flex-col w-full md:w-2/3 p-4 border m-auto"> {/* Full width on small screens and two-thirds of the width on medium and larger screens */}
        <div className="flex flex-col justify-between pb-4 border-b md:flex-row gap-3">
          <Box className="flex flex-col text-xs text-[#535665] font-medium gap-1">
            <span className="text-xl font-bold text-black">
              <Skeleton width={200} height={24} />
            </span>
            <span>
              <Skeleton width={150} height={18} /> 
            </span>
            <span>
              <Skeleton width={200} height={18} />
            </span>
            <Skeleton variant="rectangular" width={150} height={80} /> 
            <span>
              <Skeleton width={100} height={18} /> 
            </span>
            <div className="flex gap-8 items-center border-b py-3 text-sm md:text-base">
              <Skeleton width={50} height={18} />
              <Skeleton width={50} height={18} /> 
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <span>
                <Skeleton width={30} height={16} /> 
              </span>
              <span>
                <Skeleton width={100} height={16} /> 
              </span>
            </div>
            {[1, 2].map((index) => (
              <div
                className="flex flex-col justify-between border-b pb-6 mb-4 gap-6 md:flex-row"
                key={index}
              >
                <div className="flex flex-col gap-2 w-full md:w-3/4">
                  <span>
                    <Skeleton width={200} height={20} /> 
                  </span>
                  <div className="flex items-center gap-2">
                    <span>
                      <Skeleton width={30} height={16} /> 
                    </span>
                    <span>
                      <Skeleton width={50} height={16} /> 
                    </span>
                  </div>
                  <p>
                    <Skeleton width={150} height={14} /> 
                  </p>
                </div>
                <div className="flex flex-col gap-1 relative md:w-1/4 w-auto">
                  <Skeleton variant="rectangular" width={80} height={50} /> 
                  <Skeleton
                    className="absolute bottom-[-8px] bg-white shadow-md border self-center text-[10px] py-1 px-4 font-medium rounded  active:scale-90 hover:bg-orange-200 transition-all duration-300 ease-in-out"
                    width={120}
                    height={24}
                  />
                </div>
              </div>
            ))}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ResShimmer;
