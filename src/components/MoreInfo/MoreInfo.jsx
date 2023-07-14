/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

import { formatTime, roundValue } from '../../utils/utils';

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
    weather = {},
    main = {},
    wind = {},
    city: { sunset = null, sunrise = null },
  } = data ?? {};

  const formattedSunrise = formatTime(sunrise);
  const formattedSunset = formatTime(sunset);

  return (
    <div className={styles.moreInfo} ref={moreInfoRef}>
      <div className={styles.leftBlock}>
        <p>Погода сьогодні</p>
        <div className={styles.moreInfoImage}>
          <CustomIcon weatherStatus={weather[0].main} />
        </div>
        <div className={styles.infoDaylight}>
          <span>Схід {formattedSunrise}</span>
          <span>Захід {formattedSunset}</span>
        </div>
      </div>

      <div className={styles.titles}>
        <p>Температура, &#8451;: {roundValue(main.temp)}</p>
        <p>Відчувається як: {roundValue(main.feels_like)}</p>
        <p>Тиск, мм: {main.pressure}</p>
        <p>Вологість, %: {main.humidity}</p>
        <p>Вітер, м/сек: {roundValue(wind.speed)}</p>
        <a href='https://openweathermap.org/api'>openweathermap api</a>
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
    weather: PropTypes.array.isRequired,
    wind: PropTypes.object.isRequired,
    main: PropTypes.object.isRequired,
    city: PropTypes.object.isRequired,
  }),
  handleClose: PropTypes.func.isRequired,
};

MoreInfo.defaultProps = {
  data: null,
};

export default MoreInfo;
