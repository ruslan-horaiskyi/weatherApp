import './MoreInfo.css'
import weather from '../Data/data.json'

const MoreInfo = () =>
  weather &&
  weather.map(
    ({
      moreInfoImageUrl,
      sunrise,
      sunset,
      currentTemp,
      feelsLikeTemp,
      pressure,
      humidity,
      wind,
      precipitation,
    }) => (
      <div className='moreInfo'>
        <div>
          <p>Погода сьогодні</p>
          <img src={moreInfoImageUrl} alt='moreInfo' />
          <div className='infoDaylight'>
            Схід
            <span>{sunrise}</span>
            Захід
            <span>{sunset}</span>
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
  )

export default MoreInfo
