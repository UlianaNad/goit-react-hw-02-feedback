import React from 'react';
import { StyledDiv, StyledSpan } from './Statistics.styled';

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
