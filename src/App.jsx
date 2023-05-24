import { useState } from 'react'
import './App.css'
import 'modern-normalize'
import CardContainer from './components/CardConteiner/CardConteiner'
import Conteiner from './components/Conteiner/Conteiner'
import MoreInfo from './components/MoreInfo/MoreInfo'

const App = () => {
  const [focusedCard, setFocusedCard] = useState(null)

  const handleCardFocus = (date) => {
    setFocusedCard(date)
  }

  const handleCardBlur = () => {
    setFocusedCard(null)
  }

  return (
    <Conteiner>
      <CardContainer
        handleCardFocus={handleCardFocus}
        handleCardBlur={handleCardBlur}
      />
      {focusedCard && <MoreInfo date={focusedCard} />}
    </Conteiner>
  )
}

export default App
