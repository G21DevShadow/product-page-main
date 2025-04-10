import "./button.css";
import { RELATIVE_PATHS } from "../../routes/relativePaths";
import { useAmountProduct } from "../../Hooks/amountProduct";

//hook
import { useManipulateToCar } from "../../Hooks/manipulateShoppingCart";

export function ButtonAddToCart({
  productKey,
  productName,
  productPrice,
  productImg,
  PriceToPay,
}) {
  const { amount, increaseAmount, decreaseAmount } = useAmountProduct();
  const { addCart } = useManipulateToCar();
  return (
    <div className="button_content">
      <div className="button_counter">
        <img
          src={`${RELATIVE_PATHS}/icons/icon-remove.svg`}
          alt=""
          className={`button_sign ${
            amount === 0 ? "button_sing--inactive" : ""
          }`}
          onClick={decreaseAmount}
        ></img>
        <p className="button_number">{amount}</p>
        <img
          src={`${RELATIVE_PATHS}/icons/icon-add.svg`}
          alt=""
          className="button_sign"
          onClick={increaseAmount}
        ></img>
      </div>
      <a
        href="#"
        className={`button_btn ${amount === 0 ? "button_btn--inactive" : ""}`}
        onClick={() => {
          addCart({
            productKey,
            productName,
            productPrice,
            productImg,
            PriceToPay,
            amount,
          });
        }}
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
