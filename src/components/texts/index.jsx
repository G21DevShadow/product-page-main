import "./texts.css";

import { ButtonAddToCart } from "../buttonAddToCart";
import { PRODUCT } from "../../utils/products";

//utilities
import { formatPrice } from "../../utils/convertCurrency";

export function Texts() {
  return (
    <>
      {PRODUCT.map((product) => {
        return (
          <div className="texts" key={product.productKey}>
            <h2 className="texts_tag">Sneaker Company</h2>
            <h1 className="texts_title">{product.name}</h1>
            <p className="texts_description">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>

            <div className="texts_content-price">
              <div className="texts_price-discount">
                <h2 className="texts_price">{formatPrice(product.price)}</h2>
                <span className="texts_discount">
                  <p>50%</p>
                </span>
              </div>
              <p className="texts_price-crossed"> {formatPrice(250)}</p>
            </div>
            <ButtonAddToCart
              productKey={product.productKey}
              productName={product.name}
              productPrice={product.price}
              productImg={product.urlImg}
              productPriceToPay={product.priceToPay}
            />
          </div>
        );
      })}
    </>
  );
}
