import scss from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {good > 0 || neutral > 0 || bad > 0 ? (
        <>
          <h1 className={scss.title}>Statistic</h1>
          <ul className={scss.list}>
            <li className={scss.item}>
              <p className={scss.text}>Good:{good}</p>
            </li>
            <li className={scss.item}>
              <p className={scss.text}>Neutral:{neutral}</p>
            </li>
            <li className={scss.item}>
              <p className={scss.text}>Bad: {bad}</p>
            </li>
            <li className={scss.item}>
              <p className={scss.text}>Total: {total}</p>
            </li>
            <li className={scss.item}>
              <p className={scss.text}>Positive feedback: {positivePercentage}%</p>
            </li>
          </ul>
        </>
      ) : (
        <h2>No feedback given</h2>
      )}
    </>
  );
};

export default Statistics;
