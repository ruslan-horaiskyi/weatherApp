import { useState } from 'react'
import './Card.css'
import weather from '../Data/data.json'

const Card = ({ handleCardFocus }) => {
  console.log('card')
  const [focusedCard, setFocusedCard] = useState(null)

  const handleClick = (date) => {
    handleCardFocus(date)
    setFocusedCard(date)
  }

  return (
    weather &&
    weather.map(({ day, date, month, cardImageUrl, minTemp, maxTemp }) => (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div
        className={`card ${focusedCard === date ? 'focused' : ''}`}
        key={date}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        onClick={() => handleClick(date)}
      >
        <p>{day}</p>
        <p>{date}</p>
        <p>{month}</p>
        <div>
          <img src={cardImageUrl} alt='rain' />
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

export default Card
