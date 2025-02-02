import "./shoppingCart.css";
import ProductCart from "../productCart";

export function ShoppingCart({ cart, removeCart }) {
  return (
    <div className="nav_shoppingCart">
      <h2 className="nav_shoppingCart-title">Cart</h2>
      <div className="nav_shoppingCart-body">
        {(cart.length === 0 && <p>Your cart is empty</p>) || (
          <ProductCart cart={cart} removeCart={removeCart} />
        )}
      </div>
    </div>
  );
}
