import "./button.css";
import { RELATIVE_PATHS } from "../../routes/relativePaths";
import { useCounter } from "../../Hooks/counter";

export function ButtonAddToCart() {
  const { counter, increaseCounter, decreaseCounter } = useCounter();
  return (
    <div className="button_content">
      <div className="button_counter">
        <img
          src={`${RELATIVE_PATHS}/icons/icon-remove.svg`}
          alt=""
          className={`button_sign ${
            counter === 0 ? "button_sing--inactive" : ""
          }`}
          onClick={decreaseCounter}
        ></img>
        <p className="button_number">{counter}</p>
        <img
          src={`${RELATIVE_PATHS}/icons/icon-add.svg`}
          alt=""
          className="button_sign"
          onClick={increaseCounter}
        ></img>
      </div>
      <a
        href=""
        className={`button_btn ${counter === 0 ? "button_btn--inactive" : ""}`}
      >
        <img
          src={`${RELATIVE_PATHS}/icons/icon-cart-dark.svg`}
          alt=""
          className="button_cart"
        />
        Add to cart
      </a>
    </div>
  );
}
