import { useState, useEffect } from 'react';

export const useTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 10); // Update every 10ms for smooth animations

    return () => clearInterval(timer);
  }, []);

  return time;
};