import css from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p className={css.p}>Good: {good}</p>
      <p className={css.p}>Neutral: {neutral}</p>
      <p className={css.p}>Bad: {bad}</p>
      <p className={css.p}>Total: {total}</p>
      <p className={css.p}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export { Statistics };