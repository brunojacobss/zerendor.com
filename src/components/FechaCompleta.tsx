import { useState, useEffect } from 'react';

const FechaCompleta = () => {
  const [currentDate, setCurrentDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  function isOfficeHours(date?: Date) {
    if (date) {
      const hour = date.getHours();
      return hour >= 9 && hour < 17;
    } else return false;
  }

  function formatDateTime(date?: Date) {
    const dateOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    } as const;
    const timeOptions = {
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    } as const;
    if (date) {
      const time = date.toLocaleTimeString('en-US', timeOptions);

      return `${date
        .toLocaleDateString('en-US', dateOptions)
        .replaceAll(',', ' ')} • ${time}`;
    }
  }

  const dateTimeFormatted = formatDateTime(currentDate) ?? '';
  const status = isOfficeHours(currentDate) ? 'OFFICE HOURS' : 'AFTER HOURS';

  return (
    <div>
      <p className="text-[#EDFFFF]/50 text-md video-cond-regular">
        {dateTimeFormatted} • {status}
      </p>
    </div>
  );
};

export default FechaCompleta;
