import { useContext } from "react";
import { cartContext } from "../context/cartContext";

export function useManipulateToCar() {
  const { cart, addCart, emptyCart } = useContext(cartContext);
  return {
    cart,
    addCart,
    emptyCart,
  };
}
