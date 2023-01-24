import { useEffect, useState } from "react";
import MyClock from "./components/MyClock";
import TimeZoneSelector from "./components/TimeZoneSelector";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
import AddAlarm from "./components/AddAlarm";
import CurrentAlarms from "./components";

const indianTimezone = {
  value: "India Standard Time",
  abbr: "IST",
  offset: 5.5,
  isdst: false,
  text: "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
  utc: ["Asia/Kolkata", "Asia/Calcutta"],
};

function App() {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const [time, setTime] = useState(new Date());
  const [timeZone, setTimeZone] = useState(indianTimezone);
  const [alarms, setAlarms] = useState([{}]);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const addAlarm = (alarm) => {
    const newAlarms = [...alarms, alarm];
    setAlarms(newAlarms);
  };

  useEffect(() => {
    console.log("tz change", timeZone);
    dayjs.tz.setDefault(timeZone.utc[0]);
  }, [timeZone]);

  return (
    <div className="App">
      <MyClock time={time} />
      <TimeZoneSelector setTimeZone={(o) => setTimeZone(o)} />
      {time.toString()}
      <AddAlarm setAlarm={addAlarm} />
      <CurrentAlarms />
    </div>
  );
}

export default App;
