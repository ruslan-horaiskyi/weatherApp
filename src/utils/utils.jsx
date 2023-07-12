export const roundValue = (degree = null, unit = '') => {
  const formattedDegree = Math.round(degree);
  return `${formattedDegree} ${unit}`;
};

export const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};
