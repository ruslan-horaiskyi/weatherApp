import './Card.css'
import weather from '../Data/data.json'
// import PropTypes from 'prop-types'

const Card = () => {
  console.log('card')
  return (
    weather &&
    weather.map(({ day, date, month, imageUrl, minTemp, maxTemp }) => (
      <div className='card' key={date}>
        <p>{day}</p>
        <p>{date}</p>
        <p>{month}</p>
        <div>
          <img src={imageUrl} alt='rain' />
        </div>
        <div className='temperature'>
          <div>
            min. <span>{minTemp}</span>
          </div>
          <div>
            max. <span>{maxTemp}</span>
          </div>
        </div>
      </div>
    ))
  )
}
// Card.propTypes = {}

// Card.defaultProps = {}

export default Card
