const ScreenSaverToggle = ({ isScreenSaver, onToggle }) => {
  return (
    <button
      className="screensaver-toggle"
      onClick={onToggle}
      aria-label="Toggle screen saver mode"
    >
      {isScreenSaver ? '🔲' : '🖥️'}
    </button>
  );
};

export default ScreenSaverToggle;