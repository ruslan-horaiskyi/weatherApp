import PropTypes from 'prop-types';
import weatherData from '../../constants/data.json';
import Card from './Card/Card';
import MoreInfo from '../MoreInfo/MoreInfo';

import styles from './CardList.module.css';

const CardList = ({ focusedCard, handleCardFocus, onClose }) => (
  <div className={styles.cardListContainer}>
    <div className={styles.cardList}>
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
    </div>
    {focusedCard && (
      <>
        <button type='button' className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div className={styles.moreInfoContainer}>
          <MoreInfo data={focusedCard} onClose={onClose} />
        </div>
      </>
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
