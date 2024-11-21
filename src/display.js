import React from 'react';

const Display = ({ value }) => {
  const message = value > 0 ? 'Positive' : value < 0 ? 'Negative' : 'Zero';

  return (
    <div>
      <p data-testid="display-value">Value: {value}</p>
      <p data-testid="display-message">{message}</p>
    </div>
  );
};

export default Display;
