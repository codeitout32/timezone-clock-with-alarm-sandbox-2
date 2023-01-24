import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const AddAlarm = ({ setAlarm }) => {
  const [value, onChange] = useState("10:00");
  return (
    <Paper sx={{ my: 4, padding: 1 }}>
      <Typography> Add Alarm: </Typography>
      {/* <TimePicker
  label="Controlled picker"
  value={value}
  onChange={(newValue) => setValue(newValue)}
/> */}
      <Box sx={{}}>
        <TimePicker onChange={onChange} value={value} />
        <Button
          onClick={() => setAlarm(value)}
          variant="contained"
          sx={{ mx: 2 }}
        >
          Add Alarm
        </Button>
      </Box>
    </Paper>
  );
};

export default AddAlarm;
