import PropTypes from 'prop-types';
import weatherData from '../../constants/data.json';
import Card from './Card/Card';
import MoreInfo from '../MoreInfo/MoreInfo';
import './CardList.css';

const CardList = ({ focusedCard, handleCardFocus, onClose }) => (
  <div className='cardListContainer'>
    <div className='cardList'>
      {!weatherData ? (
        <div>No weather data</div>
      ) : (
        weatherData.map((dayData) => (
          <Card
            key={dayData.date}
            isActive={focusedCard?.date === dayData.date}
            data={dayData}
            handleClick={handleCardFocus}
          />
        ))
      )}

      {focusedCard && (
        <button type='button' className='closeButton' onClick={onClose}>
          X
        </button>
      )}
    </div>
    {focusedCard && (
      <div className='moreInfoContainer'>
        <MoreInfo data={focusedCard} />
      </div>
    )}
  </div>
);

CardList.propTypes = {
  focusedCard: PropTypes.shape({
    date: PropTypes.string.isRequired,
  }),
  handleCardFocus: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

CardList.defaultProps = {
  focusedCard: undefined,
};

export default CardList;
