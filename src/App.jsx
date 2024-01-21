import { Box } from "@mui/material";
import React from "react";
import MainRoutes from "./Routes/MainRoutes";
import "./App.css";

const App = () => {
  return (
    <Box sx={{ background: "#0f0f0f" }}>
      <MainRoutes />
    </Box>
  );
};

export default App;
