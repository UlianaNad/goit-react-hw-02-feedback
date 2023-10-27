import React from 'react';
import { StyledDiv, StyledSpan } from './Statistics.styled';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <h2>Statistics</h2>
      <StyledDiv>
        <StyledSpan>Good:{good}</StyledSpan>
        <StyledSpan>Neutral:{neutral}</StyledSpan>
        <StyledSpan>Bad:{bad}</StyledSpan>
        <StyledSpan>Total:{total}</StyledSpan>
        <StyledSpan>positivePercentage:{positivePercentage}%</StyledSpan>
      </StyledDiv>
    </div>
  );
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
    positivePercentage: PropTypes.string.isRequired
}