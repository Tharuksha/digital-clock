import { memo } from 'react';

const DateDisplay = ({ time }) => {
  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <div className="date-display">
      {formatDate(time)}
    </div>
  );
};

export default memo(DateDisplay);