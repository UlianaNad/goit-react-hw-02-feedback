import React from 'react';

const Feedback = ({
  countBadFeedback,
  countGoodFeedback,
  countNeutralFeedback,
}) => {
  return (
    <div>
      <button onClick={() => countGoodFeedback('good')}>Good</button>
      <button onClick={() => countNeutralFeedback('neutarl')}>Neutral</button>
      <button onClick={() => countBadFeedback('bad')}>Bad</button>
    </div>
  );
};

export default Feedback;
