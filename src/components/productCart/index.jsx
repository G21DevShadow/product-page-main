import "./productCart.css";
import { RELATIVE_PATHS } from "../../routes/relativePaths";
//utilities
import { formatPrice } from "../../utils/convertCurrency";
//hook
import { useManipulateToCar } from "../../Hooks/manipulateShoppingCart";
export default function ProductCart() {
  const { cart, emptyCart } = useManipulateToCar();

  return (
    <div className="productCart">
      {cart.map((product, index) => {
        return (
          <article className="productCart_article" key={index}>
            <img
              src={`${product.productImg}`}
              alt=""
              className="productCart_imgProduct"
            />
            <div className="productCart_info">
              <p>{product.productName}</p>
              <p>
                <span>{formatPrice(product.productPrice)}</span> x
                <span> {product.amount}</span>
                <span className="productCart_total">
                  {formatPrice(product.productPrice * product.amount)}
                </span>
              </p>
            </div>
            <img
              src={`${RELATIVE_PATHS}icons/icon-delete.svg`}
              alt=""
              className="productCart_iconDelete"
              onClick={emptyCart}
            />
          </article>
        );
      })}
      <a href="#" className="productCart_btn">
        Checkout
      </a>
    </div>
  );
}
