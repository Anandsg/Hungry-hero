import { Skeleton } from "@mui/material";
import { Stack, Box } from "@mui/system";
import React from "react";

function ResShimmer() {
  return (
      <>
        <Stack display="flex" spacing={3}>
          <Box>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton width="10%" />
            <Skeleton width="20%" />
          </Box>
          <Box>
            <Skeleton width="10%" />
            <Skeleton width="60%" />
          </Box>
          <Box>
            <Skeleton width="10%" />
            <Skeleton width="60%" />
          </Box>
          <Box>
            <Skeleton width="10%" />
            <Skeleton width="60%" />
          </Box>
          <Box>
            <Skeleton width="10%" />
            <Skeleton width="60%" />
          </Box>
          <Box>
            <Skeleton width="10%" />
            <Skeleton width="60%" />
          </Box>
        </Stack>
      </>
  );
}

export default ResShimmer;
