import scss from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onIncrement }) => (
  <>
    <button className={scss.btn} onClick={onIncrement()}>
      Good
    </button>
    <button className={scss.btn} onClick={onIncrement()}>
      Neutral
    </button>
    <button className={scss.btn} onClick={onIncrement()}>
      Bad
    </button>
  </>
);

export default FeedbackOptions;
