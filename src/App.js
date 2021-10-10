import { useState } from 'react';

import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';

function App() {
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleIncrement = option => {
    // const option = e.target.option;

    setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));

    // switch (option) {
    //   case 'good':
    //     setGood(state => state + 1);
    //     break;
    //   case 'neutral':
    //     setNeutral(state => state + 1);
    //     break;
    //   case 'bad':
    //     setBad(state => state + 1);
    //     break;

    //   default:
    //     return;
    // }
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, value) => acc + value, 0);

    // return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good / countTotalFeedback()) * 100);
  };

  const options = Object.keys(state);
  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleIncrement} />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={total}
          positivePercentage={percentage}
        />
      </Section>
    </div>
  );
}

export default App;
