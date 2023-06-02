import PropTypes from 'prop-types';

import './MoreInfo.css';

const MoreInfo = ({ data }) => {
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
    <div className='moreInfo'>
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
};

export default MoreInfo;
