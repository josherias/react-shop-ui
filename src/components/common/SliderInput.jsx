import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 210,
  },
});

export default function SliderInput({
  value,
  onPriceChange,
  minPrice,
  maxPrice,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        id="range-slider"
        style={{ fontSize: "13px", color: "#302f2f" }}
        gutterBottom
      >
        Slide to select price range
      </Typography>
      <Slider
        id="price"
        value={value}
        // min={minPrice}
        // max={maxPrice}
        onChange={onPriceChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </div>
  );
}
