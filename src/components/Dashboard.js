import React from "react";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";
import Logo from "../images/logo.jpg";

const Dashboard = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <img className="logo" src={Logo} alt="logo" />
      </Box>
    </>
  );
};

export default Dashboard;
