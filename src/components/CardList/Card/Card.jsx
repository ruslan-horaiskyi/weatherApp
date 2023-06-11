import { useCallback, memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import CustomIcon from '../../CustomIcon/CustomIcon';

import styles from './Card.module.css';

const Card = memo(({ data, isActive, handleClick }) => {
  const clickHandler = useCallback(
    (event) => {
      event.stopPropagation();
      handleClick(data);
    },
    [handleClick, data]
  );

  const { day, date, month, weatherStatus, minTemp, maxTemp } = data;

  return (
    <div
      key={date}
      className={classNames(styles.card, {
        [styles.focused]: isActive,
      })}
      role='presentation'
      onClick={clickHandler}
    >
      <div className={styles.day}>{day}</div>
      <div className={styles.date}>{date}</div>
      <div className={styles.month}>{month}</div>
      <div className={styles.cardImage}>
        <CustomIcon weatherStatus={weatherStatus} />
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
    weatherStatus: PropTypes.string.isRequired,
    minTemp: PropTypes.string.isRequired,
    maxTemp: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Card;
