/* eslint-disable react/forbid-prop-types */
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
        <div className={styles.title}>Погода за {currentDay}</div>

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
            <span>Схід {formattedSunrise}</span>
            <span>Захід {formattedSunset}</span>
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
            <span>{roundValue(main.temp)}&deg;</span>
            <span>{roundValue(main.feels_like)}&deg;</span>
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

export default memo(MoreInfo);
