import { useEffect, useCallback, useState } from 'react';
import Card from './Card/Card';
import MoreInfo from '../MoreInfo/MoreInfo';
import styles from './CardList.module.css';
import SearchForm from '../SearchForm/SearchForm';

const apiKey = '6de4f63f9a20496939e4772d2b1ae5ff';

const CardList = () => {
  const [focusedCard, setFocusedCard] = useState(null);
  const [weatherData, setWeatherData] = useState([]);

  const handleCardFocus = useCallback((date) => {
    setFocusedCard(date);
  }, []);

  const handleClose = useCallback(() => {
    setFocusedCard(null);
  }, []);

  const fetchData = useCallback((cityName) => {
    if (!cityName) {
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then(({ list, city }) => {
        if (list && list.length > 0) {
          const filteredData = list.reduce((acc, val) => {
            const currentDay = val.dt_txt.split(' ')[0];

            if (acc[currentDay]) {
              return acc;
            }

            acc[currentDay] = {
              ...val,
              currentDay,
              city: { sunset: city.sunset, sunrise: city.sunrise },
            };
            return acc;
          }, {});
          setWeatherData(Object.values(filteredData));
        } else {
          setWeatherData([]);
        }
      })
      .catch((error) => {
        console.log('Error fetching weather data:', error);
        setWeatherData([]);
      });
  }, []);

  useEffect(() => {
    fetchData('');
  }, [fetchData]);

  return (
    <div className={styles.cardListContainer}>
      <SearchForm onSubmit={fetchData} />
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
