import React from 'react';
import Statistics from './Statistics/Statistics';
import Notification from './Notification';
import { Feedback } from './Feedback/Feedback';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackVote = feedbackValue => {
    // eslint-disable-next-line default-case
    switch (feedbackValue) {
      case 'good': {
        this.setState(prevState => ({ good: prevState.good + 1 }));
        break;
      }
      case 'neutral': {
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      }
      case 'bad': {
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
      }
    }

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h1>Please leave a feedback</h1>
        <Feedback
          options={Object.keys(this.state)}
          handleFeedbackVote={this.handleFeedbackVote}
        />

        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </div>
    );
  }
}

export default App
