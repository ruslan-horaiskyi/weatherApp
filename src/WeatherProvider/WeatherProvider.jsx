import { createContext, useState } from 'react';

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData, errorMessage, setErrorMessage }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;