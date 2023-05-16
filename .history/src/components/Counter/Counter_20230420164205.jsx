import { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return <div>{counter}</div>;
}