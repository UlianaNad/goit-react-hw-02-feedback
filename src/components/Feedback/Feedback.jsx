import React from 'react';
import PropTypes from 'prop-types';

export const Feedback = ({ options, handleFeedbackVote }) => (
  <div>
    {options.map(option => (
      <button
        type="button"
        onClick={() => handleFeedbackVote(option)}
        key={option}
      >
        {option}
      </button>
    ))}
  </div>
);

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  handleFeedbackVote: PropTypes.func.isRequired,
};
