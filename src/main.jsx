import "./styles/main.css";
import App from "./app";
import { CounterContextProvider } from "./context/counterContext";
import { CartContextProvider } from "./context/cartContext";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("rot")).render(
  <CartContextProvider>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </CartContextProvider>
);
