import { useEffect, useCallback, useState } from 'react';
import Card from './Card/Card';
import MoreInfo from '../MoreInfo/MoreInfo';
import styles from './CardList.module.css';

const CardList = () => {
  const [focusedCard, setFocusedCard] = useState(null);
  const [weatherData, setWeatherData] = useState([]);

  const handleCardFocus = useCallback((date) => {
    setFocusedCard(date);
  }, []);

  const handleClose = useCallback(() => {
    setFocusedCard(null);
  }, []);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=49.5535&lon=25.5948&units=metric&appid=6de4f63f9a20496939e4772d2b1ae5ff`
    )
      .then((response) => response.json())
      .then((response) => {
        const filteredData = response.list.reduce((acc, val) => {
          const currentDay = val.dt_txt.split(' ')[0];

          if (acc[currentDay]) {
            return acc;
          }

          acc[currentDay] = { ...val, currentDay };
          acc[currentDay].city = {
            sunset: response.city.sunset,
            sunrise: response.city.sunrise,
          };
          return acc;
        }, {});
        setWeatherData(Object.values(filteredData));
      });
  }, []);

  return (
    <div className={styles.cardListContainer}>
      <div className={styles.cardList}>
        {!weatherData ? (
          <div>No weather data</div>
        ) : (
          weatherData.map((dayData) => (
            <Card
              key={dayData.currentDay}
              isActive={focusedCard?.currentDay === dayData.currentDay}
              data={dayData}
              handleClick={handleCardFocus}
            />
          ))
        )}
      </div>
      {focusedCard && (
        <div className={styles.moreInfoContainer}>
          <MoreInfo
            data={weatherData.find(
              ({ currentDay }) => focusedCard?.currentDay === currentDay
            )}
            handleClose={handleClose}
          />
        </div>
      )}
    </div>
  );
};

export default CardList;
