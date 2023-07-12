import { useCallback, memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { roundValue } from '../../../utils/utils';

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

  const { currentDay = '', weather = [], main = {} } = data ?? {};
  const date = new Date(currentDay);
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.getDate();
  const weekday = date.toLocaleString('en-US', { weekday: 'long' });

  const celsiusIcon = '℃';

  return (
    <div
      className={classNames(styles.card, {
        [styles.focused]: isActive,
      })}
      role='presentation'
      onClick={clickHandler}
    >
      <div className={styles.weekday}>{weekday}</div>
      <div className={styles.day}>{day}</div>
      <div className={styles.month}>{month}</div>
      <div className={styles.cardImage}>
        <CustomIcon weatherStatus={weather[0].main} />
      </div>
      <div className={styles.temperature}>
        <div>
          min. <span>{roundValue(main.temp_min, celsiusIcon)} </span>
        </div>
        <div>
          max. <span>{roundValue(main.temp_max, celsiusIcon)} </span>
        </div>
      </div>
    </div>
  );
});

Card.propTypes = {
  data: PropTypes.shape({
    currentDay: PropTypes.string.isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        main: PropTypes.string.isRequired,
      })
    ).isRequired,
    main: PropTypes.shape({
      temp_min: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Card;
