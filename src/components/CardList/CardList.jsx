import { useContext, useState } from 'react';
import Card from './Card/Card';
import MoreInfo from '../MoreInfo/MoreInfo';
import SearchForm from '../SearchForm/SearchForm';
import { WeatherContext } from '../WeatherProvider/WeatherProvider';

import styles from './CardList.module.css';

const CardList = () => {
  const [focusedCard, setFocusedCard] = useState(null);
  const { weatherData } = useContext(WeatherContext);

  const handleCardFocus = (date) => {
    setFocusedCard(date);
  };

  const handleClose = () => {
    setFocusedCard(null);
  };

  return (
    <div className={styles.cardListContainer}>

      <div className={styles.cardList}>
        {weatherData.map((dayData) => (
          <Card
            key={dayData.currentDay}
            isActive={focusedCard?.currentDay === dayData.currentDay}
            data={dayData}
            handleClick={handleCardFocus}
          />
        ))}
      </div>

      {focusedCard && (
        <MoreInfo
          data={weatherData.find(
            ({ currentDay }) => focusedCard?.currentDay === currentDay
          )}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default CardList;
