import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ handleClick, options }) => {
  return options.map(option => (
    <button className={css.button} type="button" key={option} onClick={() => handleClick(option)}>{option}</button>
  ));
}
export { FeedbackOptions };