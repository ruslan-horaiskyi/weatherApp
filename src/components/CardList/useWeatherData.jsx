import { useEffect, useState } from 'react';

const apiKey = '6de4f63f9a20496939e4772d2b1ae5ff';

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchData = (cityName) => {
    if (!cityName) {
      return;
    }

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

  useEffect(() => {
    if (errorMessage) {
      const timeout = setTimeout(() => {
        setErrorMessage('');
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
    // eslint-disable-next-line prettier/prettier
    return () => { };
  }, [errorMessage]);

  return { weatherData, errorMessage, fetchData };
};

export default useWeatherData;
