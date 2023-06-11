import { useEffect, useState } from 'react';

const moreInfoImageMap = {
  Rain: 'rain.png',
  Sun: 'sunny.png',
  Cloud: 'cloudy.png',
  BrokenCloud: 'brokenClouds.png',
  Mist: 'mist.png',
  Snow: 'snow.png',
  Thunderstorm: 'thunderstorm.png',
};

// eslint-disable-next-line react/prop-types
const CustomIcon = ({ weatherStatus }) => {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    import(`../../constants/Img/${moreInfoImageMap[weatherStatus]}`)
      .then((imageModule) => {
        const loadedImage = imageModule.default;
        setImgSrc(loadedImage);
      })
      .catch((error) => {
        console.error('Failed to load weather image:', error);
      });
  }, [weatherStatus]);

  if (!imgSrc) {
    return null;
  }

  return <img src={imgSrc} alt='weatherIcon' />;
};

export default CustomIcon;
