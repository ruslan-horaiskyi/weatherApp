import { useCallback, memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import RainImage from '../../../../public/Images/rain.png';
import SunImage from '../../../../public/Images/sunny.png';
import CloudImage from '../../../../public/Images/cloudy.png';
import BrokenCloudImage from '../../../../public/Images/brokenClouds.png';
import MistImage from '../../../../public/Images/mist.png';
import SnowImage from '../../../../public/Images/snow.png';
import ThunderstormImage from '../../../../public/Images/thunderstorm.png';

import styles from './Card.module.css';

const getWeatherImage = (weatherStatus) => {
  switch (weatherStatus) {
    case 'Rain':
      return RainImage;
    case 'Sun':
      return SunImage;
    case 'Cloudy':
      return CloudImage;
    case 'BrokenCloud':
      return BrokenCloudImage;
    case 'Mist':
      return MistImage;
    case 'Snow':
      return SnowImage;
    case 'Thunderstorm':
      return ThunderstormImage;

    default:
      return null;
  }
};

const Card = memo(({ data, isActive, handleClick }) => {
  const clickHandler = useCallback(
    (event) => {
      event.stopPropagation();
      handleClick(data);
    },
    [handleClick, data]
  );

  const { day, date, month, weatherStatus, minTemp, maxTemp } = data;

  const cardImageUrl = getWeatherImage(weatherStatus);

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
        <img src={cardImageUrl} alt={weatherStatus} />
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
