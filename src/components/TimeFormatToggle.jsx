const TimeFormatToggle = ({ is24Hour, onToggle }) => {
  return (
    <button
      className="format-toggle"
      onClick={onToggle}
      aria-label="Toggle time format"
    >
      {is24Hour ? '12H' : '24H'}
    </button>
  );
};

export default TimeFormatToggle;