import { useState } from "react";
import Button from '../../components/Button/Button'

export const Counter = () => {
  console.log("render Counter");
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>{counter}</div>
      <button
        onClick={() => {
          setCounter((prevValue) => prevValue + 1);
        }}
      >
        click
      </button>
      <button
        onClick={() => {
          setCounter((prevValue) => prevValue - 1);
        }}
      >
        click
      </button>
      <Button title={'+'} handleClick={() => {
        setCounter((prevValue) => prevValue + 1);
      }} />
    </>
  );
};
