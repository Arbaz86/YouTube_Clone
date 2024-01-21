import { Card } from "@mui/material";
import React from "react";

const Shimmer = ({ numOfShimmer = 4 }) => {
  return (
    <>
      {[...new Array(+numOfShimmer)].map((_, i) => (
        <Card
          className="card skeleton-card"
          key={i}
          sx={{
            backgroundColor: "transparent",
            width: { xs: "100%", sm: "358px", md: "320px" },
            borderRadius: 0,
          }}
        >
          <div className="skeleton card-banner"></div>
          <div className="card-body">
            <div className="skeleton card-title"></div>
            <div className="skeleton card-text"></div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default Shimmer;
