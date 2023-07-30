import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const inputRef = useRef(null);
  const [cityName, setCityName] = useState('');
  const [hasWarning, setHasWarning] = useState(false);

  const handleInputChange = (e) => {
    setCityName(e.target.value);
    setHasWarning(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    return cityName.trim() === ''
      ? setHasWarning(true)
      : onSubmit(cityName.trim());
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
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
