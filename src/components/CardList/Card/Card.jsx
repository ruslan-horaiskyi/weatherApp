import { useCallback, memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// import './Card.css';
import styles from './Card.module.css';

const Card = memo(({ data, isActive, handleClick }) => {
  console.log('Card');
  const clickHandler = useCallback(
    (event) => {
      event.stopPropagation();
      handleClick(data);
    },
    [handleClick, data]
  );

  const { day, date, month, cardImageUrl, minTemp, maxTemp } = data;

  return (
    <div
      key={date}
      className={classNames(styles.card, {
        [styles.focused]: isActive,
      })}
      role='presentation'
      onClick={clickHandler}
    >
      <div>{day}</div>
      <div>{date}</div>
      <div>{month}</div>
      <div>
        <img src={cardImageUrl} alt='rain' />
      </div>
      <div className={styles.temperature}>
        <div>
          min. <span>{minTemp}</span>
        </div>
        <div>
          max. <span>{maxTemp}</span>
        </div>
      </div>
    </div>
  );
});

Card.propTypes = {
  data: PropTypes.shape({
    day: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    cardImageUrl: PropTypes.string.isRequired,
    minTemp: PropTypes.string.isRequired,
    maxTemp: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Card;
