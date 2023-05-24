import './CardConteiner.css'
import PropTypes from 'prop-types'
import Card from '../Card/Card'

const CardContainer = ({ handleCardFocus, handleCardBlur }) => (
  <div className='cardConteiner'>
    <Card handleCardFocus={handleCardFocus} handleCardBlur={handleCardBlur} />
  </div>
)

CardContainer.propTypes = {
  handleCardFocus: PropTypes.func.isRequired,
  handleCardBlur: PropTypes.func.isRequired,
}

export default CardContainer
