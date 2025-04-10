import { useState } from "react";

export function useAmountProduct() {
  const [amount, setAmount] = useState(0);

  const increaseAmount = () => {
    let newN = amount + 1;
    setAmount(newN);
  };
  const decreaseAmount = () => {
    let newN = amount - 1;
    setAmount(newN);
  };
  return {
    amount,
    increaseAmount,
    decreaseAmount,
  };
}
