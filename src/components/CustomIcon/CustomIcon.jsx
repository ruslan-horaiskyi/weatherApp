import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import defaultIcon from '../../constants/Img/default.svg';

const imageMap = {
  Rain: 'Rain.svg',
  Clear: 'Clear.svg',
  Clouds: 'Clouds.svg',
  BrokenCloud: 'brokenClouds.svg',
  Mist: 'Mist.svg',
  Snow: 'Snow.svg',
  Thunderstorm: 'Thunderstorm.svg',
};

const CustomIcon = ({ weatherStatus }) => {
  const [imgSrc, setImgSrc] = useState(defaultIcon);

  useEffect(() => {
    import(`../../constants/Img/${imageMap[weatherStatus]}`)
      .then((imageModule) => {
        const loadedImage = imageModule.default;
        setImgSrc(loadedImage);
      })
      .catch((error) => {
        console.error('Failed to load weather image:', error);
      });
  }, [weatherStatus]);

  if (!imgSrc) {
    return <img src={defaultIcon} alt={imageMap[weatherStatus]} />;
  }

  return (
    <img
      src={imgSrc}
      alt={imageMap[weatherStatus]}
      onError={() => setImgSrc(defaultIcon)}
    />
  );
};

CustomIcon.propTypes = {
  weatherStatus: PropTypes.oneOf(Object.keys(imageMap)).isRequired,
};

export default CustomIcon;
