import React from "react";
import { Link } from "react-router-dom";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import { Typography } from "@material-ui/core";

function SeeMore({ category }) {
  return (
    <Link className="more" to={`/phones/${category}`}>
      <ArrowCircleRightRoundedIcon
        // sx={{ fontSize: 40 }}
        style={{ fontSize: "3vmax" }}
      />
      <Typography>See More</Typography>
    </Link>
  );
}

export default SeeMore;
