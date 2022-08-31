import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  VideoDeatails,
  ChannelDetails,
  SearchFeed,
} from "../Components/AllExports";

const MainRoutes = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDeatails />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/search/:id" element={<SearchFeed />} />
      </Routes>
    </Box>
  );
};

export default MainRoutes;
