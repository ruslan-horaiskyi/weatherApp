import PropTypes from 'prop-types';
import { useEffect, useRef, memo } from 'react';

import { formatTime, roundValue } from '../../utils/utils';

import CustomIcon from '../CustomIcon/CustomIcon';
import styles from './MoreInfo.module.css';

const MoreInfo = ({ data = null, handleClose }) => {
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
    return <div>Немає даних про погоду</div>;
  }

  const {
    weather = [],
    main = {},
    wind = {},
    currentDay,
    city: { sunset = null, sunrise = null } = {},
  } = data ?? {};

  const formattedSunrise = formatTime(sunrise);
  const formattedSunset = formatTime(sunset);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <span>Погода на </span>
          {currentDay}
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

      <div className={styles.moreInfo} ref={moreInfoRef}>
        <div className={styles.leftBlock}>
          <div className={styles.moreInfoImage}>
            <CustomIcon weatherStatus={weather[0].main} />
          </div>
          <div className={styles.infoDaylight}>
            <div>
              <span>Схід </span>
              <span>{formattedSunrise}</span>
            </div>

            <div>
              <span>Захід </span>
              <span>{formattedSunset}</span>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.centerBlock}>
            <span>Температура:</span>
            <span>Відчувається як:</span>
            <span>Тиск, мм:</span>
            <span>Вологість, %:</span>
            <span>Вітер, м/сек:</span>
          </div>
          <div className={styles.rightBlock}>
            <span>
              {roundValue(main.temp)}
              &#8451;
            </span>
            <span>
              {roundValue(main.feels_like)}
              &#8451;
            </span>
            <span>{main.pressure}</span>
            <span>{main.humidity}</span>
            <span>{roundValue(wind.speed)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

MoreInfo.propTypes = {
  data: PropTypes.shape({
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        main: PropTypes.string.isRequired,
      })
    ).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }).isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      feels_like: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    }).isRequired,
    city: PropTypes.shape({}).isRequired,
  }),
  handleClose: PropTypes.func.isRequired,
};

MoreInfo.defaultProps = {
  data: null,
};

export default memo(MoreInfo);
