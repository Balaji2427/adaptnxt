import { Box, Typography } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";

const Channel = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          p: 3,
        }}
      >
        <Sidebar />
        <Typography paragraph>Channel</Typography>
      </Box>
    </>
  );
};

export default Channel;
