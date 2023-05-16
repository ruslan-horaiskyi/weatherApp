import { useState } from "react";

export const Counter = () => {
  console.log('render Counter');
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>{counter}</div>
      <button
        onClick={() => {
          setCounter(() => counter + 1);
        }}
      >click</button>
    </>
  );
};
