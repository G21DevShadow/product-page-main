import "./shoppingCart.css";
import ProductCart from "../productCart";
//hook
import { useManipulateToCar } from "../../Hooks/manipulateShoppingCart";

export function ShoppingCart() {
  const { cart } = useManipulateToCar();
  return (
    <div className="nav_shoppingCart">
      <h2 className="nav_shoppingCart-title">Cart</h2>
      <div className="nav_shoppingCart-body">
        {(cart.length === 0 && <p>Your cart is empty</p>) || <ProductCart />}
      </div>
    </div>
  );
}
