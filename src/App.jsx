import SearchForm from './components/SearchForm/SearchForm';
import WeatherProvider from './WeatherProvider';

import styles from './App.module.css';

const App = () => {
  console.log('App');
  return (
    <div className={styles.container}>
      <WeatherProvider>
        <SearchForm />
      </WeatherProvider>
    </div>
  );
};

export default App;
