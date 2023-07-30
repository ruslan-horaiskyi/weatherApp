import { useState, useContext } from 'react';

import { WeatherContext } from '../WeatherProvider/WeatherProvider';

const apiKey = '6de4f63f9a20496939e4772d2b1ae5ff';

const useWeatherData = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { setWeatherData } = useContext(WeatherContext);


  const fetchData = (cityName) => {
    if (!cityName) {
      return;
    }

    setErrorMessage('');

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${apiKey}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(
          response.status === 404
            ? 'City not found'
            : 'Error getting weather data'
        );
      })
      .then(({ list, city }) => {
        if (list && list.length > 0) {
          const filteredData = list.reduce((acc, val) => {
            const currentDay = val.dt_txt.split(' ')[0];

            if (acc[currentDay]) {
              return acc;
            }

            acc[currentDay] = {
              ...val,
              currentDay,
              city: { sunset: city.sunset, sunrise: city.sunrise },
            };
            return acc;
          }, {});
          setWeatherData(Object.values(filteredData));
          setErrorMessage(null);
        } else {
          setWeatherData([]);
          setErrorMessage('No weather data available');
        }
      })
      .catch((error) => {
        console.log('Error:', error.message);
        setWeatherData([]);
        setErrorMessage(
          'There is no such city in the database, please check your input and try again...'
        );
      });
  };

  return { errorMessage, fetchData };
};

export default useWeatherData;
