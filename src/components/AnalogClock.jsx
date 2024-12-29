import { memo } from 'react';
import '../styles/AnalogClock.css';

const AnalogClock = ({ time }) => {
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;
  const milliseconds = time.getMilliseconds();

  const secondsDegrees = ((seconds + milliseconds / 1000) * 6) + 90;
  const minutesDegrees = ((minutes + seconds / 60) * 6) + 90;
  const hoursDegrees = ((hours + minutes / 60) * 30) + 90;

  return (
    <div className="analog-clock">
      <div className="clock-face">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="hour-marker"
            style={{
              transform: `rotate(${i * 30}deg) translateY(-40px)`
            }}
          />
        ))}
        <div
          className="hand hour-hand"
          style={{ transform: `rotate(${hoursDegrees}deg)` }}
        />
        <div
          className="hand minute-hand"
          style={{ transform: `rotate(${minutesDegrees}deg)` }}
        />
        <div
          className="hand second-hand"
          style={{ transform: `rotate(${secondsDegrees}deg)` }}
        />
        <div className="center-dot" />
      </div>
    </div>
  );
};

export default memo(AnalogClock);