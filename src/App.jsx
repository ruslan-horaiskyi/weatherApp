import SearchForm from './components/SearchForm/SearchForm';
import WeatherProvider from './components/WeatherProvider/WeatherProvider';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <WeatherProvider>
        <SearchForm />
      </WeatherProvider>
    </div>
  );
};

export default App;
