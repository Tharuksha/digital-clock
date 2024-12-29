import { memo } from 'react';
import '../styles/DigitalClock.css';

const DigitalClock = ({ time, is24Hour }) => {
  const formatNumber = (num) => num.toString().padStart(2, '0');
  
  const hours = is24Hour ? time.getHours() : time.getHours() % 12 || 12;
  const minutes = formatNumber(time.getMinutes());
  const seconds = formatNumber(time.getSeconds());
  const milliseconds = formatNumber(Math.floor(time.getMilliseconds() / 10));
  const period = time.getHours() >= 12 ? 'PM' : 'AM';

  return (
    <div className="digital-clock">
      <div className="time-display">
        <span className="hours">{formatNumber(hours)}</span>
        <span className="separator">:</span>
        <span className="minutes">{minutes}</span>
        <span className="separator">:</span>
        <span className="seconds">{seconds}</span>
        <span className="separator">.</span>
        <span className="milliseconds">{milliseconds}</span>
        {!is24Hour && <span className="period">{period}</span>}
      </div>
    </div>
  );
};

export default memo(DigitalClock);