import React from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

class Counter extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (e) => {
    const btn = e.target;
    const btnCont = btn.textContent;

    this.setState((prevState) => {
      if (btnCont.includes('Good')) {
        return {
          good: prevState.good + 1,
        };
      } else if (btnCont.includes('Neutral')) {
        return {
          neutral: prevState.neutral + 1,
        };
      } else if (btnCont.includes('Bad')) {
        return {
          bad: prevState.bad + 1,
        };
      }
      return;
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round(Number((this.state.good * 100) / this.countTotalFeedback()));
  }

  render() {
    console.log(this.state.good);
    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={this.state} onIncrement={() => this.onLeaveFeedback} />
        </Section>
        <Section>
          <Statistics
            title='Statistics'
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default Counter;
