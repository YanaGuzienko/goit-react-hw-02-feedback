import scss from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onIncrement }) => {
  return (
    <>
      <ul className={scss.list}>
        {options.map((option) => (
          <li key={option} className={scss.item}>
            <button className={[scss.btn, option].join(' ')} onClick={onIncrement}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FeedbackOptions;
