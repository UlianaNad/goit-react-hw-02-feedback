import React from 'react';
import Statistics from './Statistics/Statistics';
import Notification from './Notification';
import Feedback from './Feedback/Feedback';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,

  };



  handleFeedbackVote = (feedbackValue) => {
    switch(feedbackValue){
      case 'good': {
        this.setState(prevState => ({ good: prevState.good + 1 }))
        break
      }
      case 'good': {
        this.setState(prevState => ({ good: prevState.good + 1 }))
        break
      }
      case 'good': {
        this.setState(prevState => ({ good: prevState.good + 1 }))
        break
      }
    }
  }

  // countGoodFeedback = () => {
  //   this.setState(
  //     prevState => ({ good: prevState.good + 1 }),
  //     () => {
  //       this.countPositiveFeedbackPercentage();
  //     }
  //   );
  //   this.countTotalFeedback();
  // };

  // countNeutralFeedback = () => {
  //   this.setState(
  //     prevState => ({ neutral: prevState.neutral + 1 }),
  //     () => {
  //       this.countPositiveFeedbackPercentage();
  //     }
  //   );
  //   this.countTotalFeedback();
  // };
  // countBadFeedback = () => {
  //   this.setState(
  //     prevState => ({ bad: prevState.bad + 1 }),
  //     () => {
  //       this.countPositiveFeedbackPercentage();
  //     }
  //   );
  //   this.countTotalFeedback();
  // };

  countTotalFeedback = () => {
    this.setState(prev => ({ total: prev.total + 1 }));

    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
    if (total > 0) {
      this.setState({ positivePercentage: Math.round((good * 100) / total) });
    } else {
      this.setState({ positivePercentage: 0 });
    }
  };

  render() {
    const positivePercantage = this.countPositiveFeedbackPercentage()
    return (
      <div>
        <h1>Please leave a feedback</h1>

        <Feedback countBadFeedback={this.countBadFeedback} countGoodFeedback={this.countGoodFeedback} countNeutralFeedback={this.countNeutralFeedback} handleFeedbackVote={this.handleFeedbackVote}/>

        

        {this.state.total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positivePercentage}
          />
        )}
      </div>
    );
  }
}

export default App;
