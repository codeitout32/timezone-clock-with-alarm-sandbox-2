import React from "react";
import DayJs from "dayjs";
import Typography from "@mui/material/Typography";

const MyClock = ({ time = new Date() }) => {
  return (
    <div>
      <Typography variant="h3"> {DayJs(time).tz().format("HH : mm : ss")} </Typography>
    </div>
  );
};

export default MyClock;
