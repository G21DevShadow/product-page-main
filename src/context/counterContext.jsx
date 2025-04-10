import { createContext, useState } from "react";

export const counterContext = createContext();

export function CounterContextProvider({ children }) {
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

  return (
    <counterContext.Provider
      value={{ counter, randomCounter, increaseCounter, decreaseCounter }}
    >
      {children}
    </counterContext.Provider>
  );
}
