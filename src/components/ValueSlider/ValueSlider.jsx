import React from "react";

import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";

function ValueLabelComponent(props) {
  const { children, open, value } = props;
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

export default function ValueSlider({
  heading,
  value,
  handleChange,
  maxValue,
  minValue
}) {
  return (
    <div>
      <Typography gutterBottom>{heading}</Typography>
      <Slider
        ValueLabelComponent={ValueLabelComponent}
        value={value}
        onChange={handleChange}
        max={maxValue}
        min={minValue}
        step={0.01}
      />
    </div>
  );
}
