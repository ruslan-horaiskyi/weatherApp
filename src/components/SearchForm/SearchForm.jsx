import { useState, useEffect, useRef, useContext } from 'react';
import { WeatherContext } from '../WeatherProvider/WeatherProvider';
import Warning from '../Warning/Warning';
import useWeatherData from '../useWeatherData/useWeatherData'

import CardList from '../CardList/CardList';

import styles from './SearchForm.module.css';

const SearchForm = () => {
  const inputRef = useRef(null);
  const [cityName, setCityName] = useState('');
  const [hasWarning, setHasWarning] = useState(false);
  const { fetchData, isLoading } = useWeatherData();

  const { errorMessage } = useContext(WeatherContext);

  const handleInputChange = (e) => {
    setCityName(e.target.value);
    setHasWarning(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const trimmedCityName = cityName.trim();
    setCityName(trimmedCityName);

    return trimmedCityName === '' ? setHasWarning(true) : fetchData(trimmedCityName);
  };

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
        />
        <button type='submit'>Search</button>
      </form>

      {errorMessage && !isLoading && <Warning errorMessage={errorMessage} />}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <CardList />
      )}

    </>
  );
};

export default SearchForm;
