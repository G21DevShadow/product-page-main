import { useState } from "react";

export function useCounter() {
  const [counter, setCounter] = useState(0);

  const randomCounter = (n) => {
    const newN = n;
    setCounter(newN);
  };
  const increaseCounter = () => {
    let newN = counter + 1;
    setCounter(newN);
  };
  const decreaseCounter = () => {
    let newN = counter - 1;
    setCounter(newN);
  };

  return {
    counter,
    randomCounter,
    increaseCounter,
    decreaseCounter,
  };
}
