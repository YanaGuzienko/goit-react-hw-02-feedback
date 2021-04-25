import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

import scss from './Counter.module.scss';

class Counter extends React.Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };

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
    return (
      <div className={scss.container}>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onIncrement={this.onLeaveFeedback} />
        </Section>
        <Section>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default Counter;
