import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

import rainImage from '../../constants/Img/rain.png';
import sunnyImage from '../../constants/Img/sunny.png';
import cloudyImage from '../../constants/Img/cloudy.png';
import brokenCloudImage from '../../constants/Img/brokenClouds.png';
import mistImage from '../../constants/Img/mist.png';
import snowImage from '../../constants/Img/snow.png';
import thunderstormImage from '../../constants/Img/thunderstorm.png';

import styles from './MoreInfo.module.css';

const moreInfoImageMap = {
  Rain: rainImage,
  Sun: sunnyImage,
  Cloud: cloudyImage,
  BrokenCloud: brokenCloudImage,
  Mist: mistImage,
  Snow: snowImage,
  Thunderstorm: thunderstormImage,
};

const MoreInfo = ({ data, onClose }) => {
  const moreInfoRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreInfoRef.current && !moreInfoRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  if (!data) {
    return null;
  }

  const {
    weatherStatus,
    sunrise,
    sunset,
    currentTemp,
    feelsLikeTemp,
    pressure,
    humidity,
    wind,
    precipitation,
  } = data;

  const moreInfoImage = moreInfoImageMap[weatherStatus];

  return (
    <div className={styles.moreInfo} ref={moreInfoRef}>
      <div>
        <p>Погода сьогодні</p>
        <div className={styles.moreInfoImage}>
          <img src={moreInfoImage} alt='moreInfo' />
        </div>
        <div className={styles.infoDaylight}>
          <span> Схід {sunrise}</span> <span> Захід {sunset}</span>
        </div>
      </div>

      <div className={styles.titles}>
        <p>Температура, °C: {currentTemp}</p>
        <p>Відчувається як: {feelsLikeTemp}</p>
        <p>Тиск, мм: {pressure}</p>
        <p>Вологість, %: {humidity}</p>
        <p>Вітер, м/сек: {wind}</p>
        <p>Ймовірність опадів, %: {precipitation}</p>
      </div>
      <button
        className={styles.closeButton}
        onClick={onClose}
        type='button'
        aria-label='Close'
        title='Close'
      >
        &#10005;
      </button>
    </div>
  );
};

MoreInfo.propTypes = {
  data: PropTypes.shape({
    weatherStatus: PropTypes.string.isRequired,
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired,
    currentTemp: PropTypes.string.isRequired,
    feelsLikeTemp: PropTypes.string.isRequired,
    pressure: PropTypes.string.isRequired,
    humidity: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
    precipitation: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MoreInfo;
