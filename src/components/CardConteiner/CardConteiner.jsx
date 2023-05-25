import './CardConteiner.css'
import PropTypes from 'prop-types'
import Card from '../Card/Card'

const CardContainer = ({ handleCardFocus }) => (
  <div className='cardConteiner'>
    <Card handleCardFocus={handleCardFocus} />
  </div>
)

CardContainer.propTypes = {
  handleCardFocus: PropTypes.func.isRequired,
}

export default CardContainer
