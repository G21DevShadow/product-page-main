import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Función para añadir o remover un producto al carrito
  const addCart = (product) => {
    // Agregamos el producto
    setCart((prevCart) => {
      if (prevCart.length) {
        return prevCart.map((prod) => {
          return {
            ...prod,
            amount: product.amount,
          };
        });
      } else {
        return [product];
      }
    });
  };

  // Función para vaciar el carrito
  const emptyCart = () => {
    setCart(new Array(0));
  };
  return (
    <cartContext.Provider value={{ cart, addCart, emptyCart }}>
      {children}
    </cartContext.Provider>
  );
}
