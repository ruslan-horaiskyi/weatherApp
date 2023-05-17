import { useState } from 'react'
import './Card.css'
import weather from '../Data/data.json'

const Card = () => {
  console.log('card')
  const [focusedCard, setFocusedCard] = useState(null)

  const handleCardFocus = (date) => {
    setFocusedCard(date)
  }

  const handleCardBlur = () => {
    setFocusedCard(null)
  }

  return (
    weather &&
    weather.map(({ day, date, month, cardImageUrl, minTemp, maxTemp }) => (
      <div
        className={`card ${focusedCard === date ? 'focused' : ''}`}
        key={date}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        onFocus={() => handleCardFocus(date)}
        onBlur={handleCardBlur}
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
