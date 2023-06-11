import PropTypes from 'prop-types';
import weatherData from '../../constants/data.json';
import Card from './Card/Card';
import MoreInfo from '../MoreInfo/MoreInfo';
import { ReactComponent as SVGIcon } from '../../constants/Img/svg.svg';

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
        <button
          type='button'
          className={styles.closeButton}
          onClick={onClose}
          aria-label='Close'
          title='Close'
        >
          <SVGIcon />
        </button>
        <div className={styles.moreInfoContainer}>
          <MoreInfo
            data={
              weatherData.filter(({ date }) => focusedCard?.date === date)[0]
            }
            onClose={onClose}
          />
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
