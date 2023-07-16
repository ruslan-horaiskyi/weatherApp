import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [cityName, setCityName] = useState('');

  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(cityName);
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.searchForm}>
      <input
        type='text'
        value={cityName}
        onChange={handleInputChange}
        placeholder='Введіть назву міста'
      />
      <button type='submit'>Пошук</button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
