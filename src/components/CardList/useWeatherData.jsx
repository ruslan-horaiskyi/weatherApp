import { useEffect, useState, useContext } from 'react';

import { WeatherContext } from '../../App';

const apiKey = '6de4f63f9a20496939e4772d2b1ae5ff';

const useWeatherData = () => {
  // const [weatherData, setWeatherData] = useState([]);
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
            ? 'Місто не знайдено'
            : 'Помилка отримання даних про погоду'
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
          setErrorMessage('Немає даних про погоду');
        }
      })
      .catch((error) => {
        console.log('Error:', error.message);
        setWeatherData([]);
        setErrorMessage(
          'Такого міста немає в базі, перевірте введені дані та спробуйте ще раз...'
        );
      });
  };

  // TODO: Винести цю логіку в кстомний хук Ворнінга

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setErrorMessage('');
  //   }, 4000);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [errorMessage]);

  return { errorMessage, fetchData };
};

export default useWeatherData;
