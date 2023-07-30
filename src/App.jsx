import CardList from './components/CardList/CardList';
import WeatherProvider from './components/WeatherProvider/WeatherProvider';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <WeatherProvider>
        <CardList />
      </WeatherProvider>
    </div>
  );
};

export default App;
