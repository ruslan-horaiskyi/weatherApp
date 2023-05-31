import PropTypes from 'prop-types';

import weatherData from '../../constants/data.json';
import Card from './Card/Card';

const CardList = ({ focusedCard, handleCardFocus }) => {
  console.log('CardList');

  return !weatherData ? (
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
  );
};

CardList.propTypes = {
  focusedCard: PropTypes.shape({
    date: PropTypes.string.isRequired,
  }),
  handleCardFocus: PropTypes.func.isRequired,
};

CardList.defaultProps = {
  focusedCard: undefined,
};

export default CardList;
