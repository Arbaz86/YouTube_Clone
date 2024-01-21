import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  VideoDetails,
  SearchFeed,
} from "../Components/AllExports";

const MainRoutes = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  );
};

export default MainRoutes;
