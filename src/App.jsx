import { createContext, useState } from 'react';

import CardList from './components/CardList/CardList';

import styles from './App.module.css';

export const WeatherContext = createContext(1);

const App = () => {
  const [weatherData, setWeatherData] = useState([]);

  return <div className={styles.container}>
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      <CardList />
    </WeatherContext.Provider>
  </div>
}
export default App;
