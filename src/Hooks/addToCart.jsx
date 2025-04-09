import { useState } from "react";

export default function useAddToCart() {
  const [cart, setCart] = useState(new Array(0));

  // Función para añadir o remover un producto al carrito
  const addCart = (product) => {
    product.priceToPay = addFormattedPrices({
      currency: "USD",
      price: product.productPrice,
      count: product.counter,
    });

    // Agregamos el producto
    setCart([product]);
  };

  // Función para vaciar el carrito
  const emptyCart = () => {
    setCart(new Array(0));
  };

  const convertTextToNumber = (valorFormateado) => {
    // Remueve los puntos y convierte a número
    return Number(valorFormateado.replace(/[^\d.-]/g, ""));
  };

  // Función para sumar varios valores formateados
  const addFormattedPrices = ({ price, count, currency }) => {
    // Nos aseguramos de que el precio sea un número
    const parsedPrice = convertTextToNumber(price);
    const total = count * parsedPrice;

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      minimumFractionDigits: 2, // Asegura que siempre haya 2 decimales
      currency,
    }).format(total); // Formatea el resultado
  };

  return {
    cart,
    addCart,
    emptyCart,
  };
}
