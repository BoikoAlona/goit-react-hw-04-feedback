import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notofication';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
      }));
    };
  
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((previousValue, option) => previousValue + option, 0);
  };
  
  countPositiveFeedbackPercentage = () => {
     return Math.round(((this.state.good + this.state.neutral) / this.countTotalFeedback()) * 100);
  };
  
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            handleClick={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? ( 
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
          ) : (
          <Notification message="There is no feedback"/>
    )}
        </Section>
        <p></p>
      </div>
    );
  }
}
