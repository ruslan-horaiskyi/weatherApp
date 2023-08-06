import { useState, useEffect, useRef, useContext } from 'react';
import { WeatherContext } from '../../WeatherProvider/WeatherProvider';
import classNames from 'classnames';

import Warning from '../Warning/Warning';
import useWeatherData from '../../hooks/useWeatherData';
import CardList from '../CardList';

import styles from './SearchForm.module.css';

const SearchForm = () => {
  const inputRef = useRef(null);
  const [cityName, setCityName] = useState('');
  const [hasWarning, setHasWarning] = useState(false);
  const [userCity, setUserCity] = useState(false);
  const { fetchData, isLoading } = useWeatherData();

  const { errorMessage, weatherData } = useContext(WeatherContext);

  const handleInputChange = (e) => {
    setCityName(e.target.value);
    setHasWarning(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const trimmedCityName = cityName.trim();
    setCityName(trimmedCityName);

    trimmedCityName === '' ? setHasWarning(true) : fetchData(trimmedCityName);
  };

  const getUserGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=uk`
            );
            const data = await response.json();

            if (data) {
              localStorage.setItem('city', data.city);
              setUserCity(true);
            }
          } catch (error) {
            console.error('Error getting city name:', error);
          }
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    getUserGeolocation();
  }, []);

  useEffect(() => {
    const storedCity = localStorage.getItem('city');

    if (storedCity) {
      setCityName(storedCity);
      fetchData(storedCity);
    }
  }, [userCity]);

  useEffect(() => {
    if (hasWarning) {
      inputRef.current.classList.add(styles.shakeAnimation);

      setTimeout(() => {
        inputRef.current.classList.remove(styles.shakeAnimation);
        setHasWarning(false);
      }, 500);
    }
  }, [hasWarning]);

  return (
    <>
      <form onSubmit={handleFormSubmit} className={styles.searchForm}>
        <input
          ref={inputRef}
          type='text'
          value={cityName}
          onChange={handleInputChange}
          placeholder='Enter the name of the settlement'
          className={classNames(styles.searchInput, { [styles.loadingInput]: isLoading })}
          disabled={isLoading}
        />
        <button type='submit' disabled={isLoading}>Search</button>
      </form>

      {errorMessage && !isLoading && <Warning errorMessage={errorMessage} />}

      {!!weatherData?.length && !isLoading && <CardList />}

    </>
  );
};

export default SearchForm;
