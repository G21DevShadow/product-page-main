import "./productCart.css";
import { RELATIVE_PATHS } from "../../routes/relativePaths";
export default function ProductCart({ cart, removeCart }) {
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
                <span>${product.productPrice}</span> x
                <span> {product.counter}</span>
                <span className="productCart_total"> {product.priceToPay}</span>
              </p>
            </div>
            <img
              src={`${RELATIVE_PATHS}icons/icon-delete.svg`}
              alt=""
              className="productCart_iconDelete"
              onClick={removeCart}
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
