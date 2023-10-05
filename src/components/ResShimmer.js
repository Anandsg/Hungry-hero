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
              <Skeleton width={200} height={30} /> {/* Increased height */}
            </span>
            <span>
              <Skeleton width={150} height={24} /> {/* Increased height */}
            </span>
            <span>
              <Skeleton width={200} height={24} /> {/* Increased height */}
            </span>
            <Skeleton variant="rectangular" width={200} height={100} /> {/* Increased dimensions */}
            <span>
              <Skeleton width={100} height={24} /> {/* Increased height */}
            </span>
            <div className="flex gap-8 items-center border-b py-3 text-sm md:text-base">
              <Skeleton width={50} height={24} /> {/* Increased height */}
              <Skeleton width={50} height={24} /> {/* Increased height */}
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <span>
                <Skeleton width={30} height={20} /> {/* Increased height */}
              </span>
              <span>
                <Skeleton width={100} height={20} /> {/* Increased height */}
              </span>
            </div>
            {[1, 2].map((index) => (
              <div
                style={{display:'flex',gap:'25rem'}}
                key={index}
              >
                <div className="flex flex-col gap-2 w-full md:w-3/4">
                  <span>
                    <Skeleton width={200} height={24} /> {/* Increased height */}
                  </span>
                  <div className="flex items-center gap-2">
                    <span>
                      <Skeleton width={30} height={20} /> {/* Increased height */}
                    </span>
                    <span>
                      <Skeleton width={50} height={20} /> {/* Increased height */}
                    </span>
                  </div>
                  <p>
                    <Skeleton width={150} height={18} /> {/* Increased height */}
                  </p>
                </div>
                <div style={{margin:'1rem 0'}} className="flex flex-col gap-1 relative md:w-1/4 w-auto" >
                    <Skeleton  style={{marginBottom:'1rem'}}  variant="rectangular" width={130} height={100} /> {/* Further increased dimensions */}
                  <Skeleton
                 
                    className="absolute bottom-[-8px] bg-white shadow-md border self-center text-[10px] py-1 px-4 font-medium rounded  active:scale-90 hover:bg-orange-200 transition-all duration-300 ease-in-out"
                    width={130}
                    height={28}
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
