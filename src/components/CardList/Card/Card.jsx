import { useCallback, memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import rainImage from '../../../constants/Img/rain.png';
import sunnyImage from '../../../constants/Img/sunny.png';
import cloudyImage from '../../../constants/Img/cloudy.png';
import brokenCloudImage from '../../../constants/Img/brokenClouds.png';
import mistImage from '../../../constants/Img/mist.png';
import snowImage from '../../../constants/Img/snow.png';
import thunderstormImage from '../../../constants/Img/thunderstorm.png';

import styles from './Card.module.css';

const weatherImageMap = {
  Rain: rainImage,
  Sun: sunnyImage,
  Cloud: cloudyImage,
  BrokenCloud: brokenCloudImage,
  Mist: mistImage,
  Snow: snowImage,
  Thunderstorm: thunderstormImage,
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

  const weatherImage = weatherImageMap[weatherStatus];

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
        <img src={weatherImage} alt={weatherStatus} />
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
