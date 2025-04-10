import { useContext } from "react";
import { counterContext } from "../context/counterContext";

export function useCounter() {
  const { counter, increaseCounter, decreaseCounter, randomCounter } =
    useContext(counterContext);

  return {
    counter,
    randomCounter,
    increaseCounter,
    decreaseCounter,
  };
}
