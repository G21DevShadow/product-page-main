import "./texts.css";

import { ButtonAddToCart } from "../buttonAddToCart";

export function Texts() {
  return (
    <div className="texts">
      <h2 className="texts_tag">Sneaker Company</h2>
      <h1 className="texts_title">Fall Limited Edition Sneakers</h1>
      <p className="texts_description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="texts_content-price">
        <div className="texts_price-discount">
          <h2 className="texts_price">$125.00</h2>
          <span className="texts_discount">
            <p>50%</p>
          </span>
        </div>
        <p className="texts_price-crossed"> $250.00</p>
      </div>
      <ButtonAddToCart />
    </div>
  );
}
