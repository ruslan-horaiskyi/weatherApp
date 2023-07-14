import { useEffect, useState } from 'react';

const moreInfoImageMap = {
  Rain: 'Rain.png',
  Clear: 'Clear.png',
  Clouds: 'Clouds.png',
  BrokenCloud: 'brokenClouds.png',
  Mist: 'Mist.png',
  Snow: 'Snow.png',
  Thunderstorm: 'Thunderstorm.png',
};

// TODO: fix
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
