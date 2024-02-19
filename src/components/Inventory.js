import React from "react";
import Sidebar from "./Sidebar";
import { Box, Typography } from "@mui/material";

const Inventory = () => {
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
        <Typography paragraph>Inventory</Typography>
      </Box>
    </>
  );
};

export default Inventory;
