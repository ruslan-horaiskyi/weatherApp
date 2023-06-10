import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

import './MoreInfo.css';

const MoreInfo = ({ data, onClose }) => {
  const moreInfoRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreInfoRef.current && !moreInfoRef.current.contains(event.target)) {
        onClose();
      }
    };
    console.log('Click');
    document.body.addEventListener('click', handleClickOutside);

    return () => {
      console.log('Removing click listener');
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  console.log('MoreInfo');

  if (!data) {
    return null;
  }

  const {
    moreInfoImageUrl,
    sunrise,
    sunset,
    currentTemp,
    feelsLikeTemp,
    pressure,
    humidity,
    wind,
    precipitation,
  } = data;

  return (
    <div className='moreInfo' ref={moreInfoRef}>
      <div>
        <p>Погода сьогодні</p>
        <img src={moreInfoImageUrl} alt='moreInfo' />
        <div className='infoDaylight'>
          Схід <span>{sunrise}</span> Захід <span>{sunset}</span>
        </div>
      </div>

      <div className='titles'>
        <p>Температура, °C: {currentTemp}</p>
        <p>Відчувається як: {feelsLikeTemp}</p>
        <p>Тиск, мм: {pressure}</p>
        <p>Вологість, %: {humidity}</p>
        <p>Вітер, м/сек: {wind}</p>
        <p>Ймовірність опадів, %: {precipitation}</p>
      </div>
      <button className='closeButton' onClick={onClose} type='button'>
        X
      </button>
    </div>
  );
};

MoreInfo.propTypes = {
  data: PropTypes.shape({
    moreInfoImageUrl: PropTypes.string.isRequired,
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
