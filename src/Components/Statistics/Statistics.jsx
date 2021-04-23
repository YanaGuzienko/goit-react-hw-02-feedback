import scss from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {positivePercentage > 0 ? (
        <>
          <p>Good:{good}</p>
          <p>Neutral:{neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      ) : (
        <h2>No feedback given</h2>
      )}
    </>
  );
};

export default Statistics;
