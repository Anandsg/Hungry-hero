import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function ResShimmer() {
  const boxStyle = {
    width: "70%",
    display: "contents", // Apply display: contents
  };
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box mb={2}>
        <Skeleton variant="rectangular" width={280} height={218} />
      </Box>
      <Box width="70%" style={boxStyle}>
        <Skeleton width="50%" />
        <Skeleton width="60%" />
        <Skeleton width="60%" />
        <Skeleton width="50%" />
        <Skeleton width="50%" />
        <Skeleton width="60%" />
        <Skeleton width="60%" />
        <Skeleton width="60%" />
        <Skeleton width="50%" />
        <Skeleton width="60%" />
        <Skeleton width="60%" />
        <Skeleton width="50%" />
        <Skeleton width="50%" />
        <Skeleton width="40%" />
      </Box>
    </Box>
  );
}

export default ResShimmer;


