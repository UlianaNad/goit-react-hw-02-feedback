import React from 'react';

function Statistics({good, neutral, bad, total, positivePercentage}) {
  return (
    <div>
      <h2>Statistics</h2>
      <span>Good:{good}</span>
      <span>Neutral:{neutral}</span>
      <span>Bad:{bad}</span>
      <span>Total:{total}</span>
      <span>positivePercentage:{positivePercentage}</span>
    </div>
  );
}

export default Statistics;
