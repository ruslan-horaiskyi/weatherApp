/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import CustomIcon from '../CustomIcon/CustomIcon';
import styles from './MoreInfo.module.css';

const MoreInfo = ({ data, handleClose }) => {
  const moreInfoRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreInfoRef.current && !moreInfoRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [handleClose]);

  if (!data) {
    return <div>No weather data available</div>;
  }

  const {
    weather,
    main,
    wind,
    city: { sunset, sunrise },
  } = data;

  return (
    <div className={styles.moreInfo} ref={moreInfoRef}>
      <div>
        <p>Погода сьогодні</p>
        <div className={styles.moreInfoImage}>
          <CustomIcon weatherStatus={weather[0].main} />
        </div>
        <div className={styles.infoDaylight}>
          <span> Схід {sunrise}</span> <span> Захід {sunset}</span>
        </div>
      </div>

      <div className={styles.titles}>
        <p>Температура, °C: {main.temp}</p>
        <p>Відчувається як: {main.feels_like}</p>
        <p>Тиск, мм: {main.pressure}</p>
        <p>Вологість, %: {main.humidity}</p>
        <p>Вітер, м/сек: {wind.speed}</p>
        {/* <p>Ймовірність опадів, %: {precipitation}</p> */}
      </div>
      <button
        className={styles.closeButton}
        onClick={handleClose}
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
    weather: PropTypes.string.isRequired,
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired,
    temp: PropTypes.string.isRequired,
    feels_like: PropTypes.string.isRequired,
    pressure: PropTypes.string.isRequired,
    humidity: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
    precipitation: PropTypes.string.isRequired,
    main: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }),
  handleClose: PropTypes.func.isRequired,
};

MoreInfo.defaultProps = {
  data: null,
};

export default MoreInfo;
