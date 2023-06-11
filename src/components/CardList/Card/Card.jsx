import { useCallback, useEffect, useState, memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const weatherImageMap = {
  Rain: 'rain.png',
  Sun: 'sunny.png',
  Cloud: 'cloudy.png',
  BrokenCloud: 'brokenClouds.png',
  Mist: 'mist.png',
  Snow: 'snow.png',
  Thunderstorm: 'thunderstorm.png',
};

const Card = memo(({ data, isActive, handleClick }) => {
  const [weatherImage, setWeatherImage] = useState(null);

  const clickHandler = useCallback(
    (event) => {
      event.stopPropagation();
      handleClick(data);
    },
    [handleClick, data]
  );

  const { day, date, month, weatherStatus, minTemp, maxTemp } = data;

  useEffect(() => {
    import(`../../../constants/Img/${weatherImageMap[weatherStatus]}`)
      .then((imageModule) => {
        const loadedImage = imageModule.default;
        setWeatherImage(loadedImage);
      })
      .catch((error) => {
        console.error('Failed to load weather image:', error);
      });
  }, [weatherStatus]);

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
        {weatherImage && <img src={weatherImage} alt={weatherStatus} />}
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
