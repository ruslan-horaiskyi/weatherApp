import PropTypes from 'prop-types'
import './MoreInfo.css'
import weather from '../Data/data.json'

const MoreInfo = ({ date }) => {
  console.log('MoreInfo')
  const selectedCard = weather.find((item) => item.date === date)

  if (!selectedCard) {
    return null
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
  } = selectedCard

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
  )
}

MoreInfo.propTypes = {
  date: PropTypes.string.isRequired,
}

export default MoreInfo
