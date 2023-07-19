import { useEffect, useCallback, useState } from 'react';
import Card from './Card/Card';
import MoreInfo from '../MoreInfo/MoreInfo';
import styles from './CardList.module.css';
import SearchForm from '../SearchForm/SearchForm';

const apiKey = '6de4f63f9a20496939e4772d2b1ae5ff';

const CardList = () => {
  const [focusedCard, setFocusedCard] = useState(null);
  const [weatherData, setWeatherData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

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
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(
          response.status === 404
            ? 'City not found'
            : 'Error fetching weather data'
        );
      })
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
          setErrorMessage(null);
        } else {
          setWeatherData([]);
          setErrorMessage('No weather data available');
        }
      })
      .catch((error) => {
        console.log('Error:', error.message);
        setWeatherData([]);
        setErrorMessage(
          'There is no such city in the database. Please check your request and try again.'
        );
      });
  }, []);

  useEffect(() => {
    fetchData('');
  }, [fetchData]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (errorMessage) {
      setShowTooltip(true);
      const timeout = setTimeout(() => {
        setErrorMessage('');
        setShowTooltip(false);
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [errorMessage]);

  return (
    <div className={styles.cardListContainer}>
      <SearchForm onSubmit={fetchData} />

      <div
        className={showTooltip ? styles.showErrorTooltip : styles.errorTooltip}
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
