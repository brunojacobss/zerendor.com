import React, { useState, useEffect } from "react";

const FechaCompleta = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [colon, setColon] = useState(":");

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDate(new Date());
      setColon((prev) => (prev === ":" ? "\u2009" : ":"));
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  function isOfficeHours(date) {
    const hour = date.getHours();
    return hour >= 9 && hour < 17;
  }

  function formatDateTime(date) {
    const dateOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const timeOptions = {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const time = date.toLocaleTimeString("en-US", timeOptions);
    //const parts = time.split(":");

    return `${date
      .toLocaleDateString("en-US", dateOptions)
      .replaceAll(",", " ")} • ${time}`;
  }

  const dateTimeFormatted = formatDateTime(currentDate);
  const status = isOfficeHours(currentDate) ? "OFFICE HOURS" : "AFTER HOURS";

  return (
    <div>
      <p className="text-[#EDFFFF]/50 text-md video-cond-regular">
        {dateTimeFormatted} • {status}
      </p>
    </div>
  );
};

export default FechaCompleta;
