import { useState, useEffect, useRef, useContext } from 'react';
import { WeatherContext } from '../../WeatherProvider/WeatherProvider';
import classNames from 'classnames';
import Warning from '../Warning/Warning';
import useWeatherData from '../../hooks/useWeatherData';
import CardList from '../CardList';

import styles from './SearchForm.module.css';

const SearchForm = () => {
  console.log('SearchForm');
  const inputRef = useRef(null);
  const [cityName, setCityName] = useState('');
  const [hasWarning, setHasWarning] = useState(false);
  const { fetchData, isLoading } = useWeatherData();

  const { errorMessage, weatherData } = useContext(WeatherContext);

  const handleInputChange = (e) => {
    setCityName(e.target.value);
    setHasWarning(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const trimmed = cityName.trim();
    setCityName(trimmed);

    trimmed === '' ? setHasWarning(true) : fetchData(trimmed);
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
