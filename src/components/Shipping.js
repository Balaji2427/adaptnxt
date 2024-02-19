import { Box, Typography } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";

const Shipping = () => {
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
        <Typography paragraph>Shipping</Typography>
      </Box>
    </>
  );
};

export default Shipping;
