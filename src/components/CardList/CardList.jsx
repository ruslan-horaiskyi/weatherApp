import { useEffect, useState } from 'react';
import Card from './Card/Card';
import MoreInfo from '../MoreInfo/MoreInfo';
import styles from './CardList.module.css';
import SearchForm from '../SearchForm/SearchForm';
import useWeatherData from './useWeatherData';

const CardList = () => {
  const [focusedCard, setFocusedCard] = useState(null);
  const { weatherData, errorMessage, fetchData } = useWeatherData();
  const [tooltipVisible, setTooltipVisible] = useState(false); // New state for tooltip visibility

  const handleCardFocus = (date) => {
    setFocusedCard(date);
  };

  const handleClose = () => {
    setFocusedCard(null);
  };

  useEffect(() => {
    if (errorMessage) {
      const timeout = setTimeout(() => {
        fetchData('');
      }, 2000);

      setTooltipVisible(true);

      return () => {
        clearTimeout(timeout);
        setTooltipVisible(false);
      };
    }
    // eslint-disable-next-line prettier/prettier
    return () => { };
  }, [errorMessage, fetchData]);

  return (
    <div className={styles.cardListContainer}>
      <SearchForm onSubmit={fetchData} />

      <div
        className={
          tooltipVisible ? styles.showErrorTooltip : styles.errorTooltip
        }
        data-tooltip={errorMessage}
      />

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
