import { useState } from 'react';
import { useTime } from './hooks/useTime';
import AnalogClock from './components/AnalogClock';
import DigitalClock from './components/DigitalClock';
import DateDisplay from './components/DateDisplay';
import ThemeToggle from './components/ThemeToggle';
import TimeFormatToggle from './components/TimeFormatToggle';
import ScreenSaverToggle from './components/ScreenSaverToggle';
import './styles/theme.css';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [is24Hour, setIs24Hour] = useState(false);
  const [isScreenSaver, setIsScreenSaver] = useState(false);
  const time = useTime();

  const toggleTheme = () => {
    setIsDark(prev => !prev);
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  };

  return (
    <div className={`app ${isDark ? 'dark' : 'light'} ${isScreenSaver ? 'screensaver' : ''}`}>
      <div className="controls">
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        <TimeFormatToggle is24Hour={is24Hour} onToggle={() => setIs24Hour(prev => !prev)} />
        <ScreenSaverToggle isScreenSaver={isScreenSaver} onToggle={() => setIsScreenSaver(prev => !prev)} />
      </div>
      
      <div className="clock-container">
        <AnalogClock time={time} />
        <DigitalClock time={time} is24Hour={is24Hour} />
        <DateDisplay time={time} />
      </div>
    </div>
  );
}

export default App;