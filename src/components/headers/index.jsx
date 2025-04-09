import "./header.css";
import { RELATIVE_PATHS } from "../../routes/relativePaths";

//Componentes

export function Header({ activateMenu, activateCart, cart }) {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav_content-menu">
          <img
            src={`${RELATIVE_PATHS}/icons/icon-menu.svg`}
            alt="icono de menu"
            className="nav_icon-menu"
            onClick={activateMenu}
          />

          <ul className="nav_list">
            <li className="nav_item .nav_item-first">
              <h2 className="nav_logo">sneakers</h2>
            </li>
            <div className="nav_group-items">
              <li className="nav_item">
                <a href="#" className="nav_link">
                  Collections
                </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav_link">
                  Men
                </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav_link">
                  Women
                </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav_link">
                  About
                </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav_link">
                  Concat
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div className="nav_content-avatar">
          <img
            src={`${RELATIVE_PATHS}/icons/icon-cart.svg`}
            alt="icono de carrito de compras"
            className="nav_icon-cart"
            onClick={activateCart}
          />
          {cart.length !== 0 && (
            <span className="nav_shoppingCart-number">{cart[0].counter}</span>
          )}
          <img
            src={`${RELATIVE_PATHS}/images/image-avatar.png`}
            alt="imagen de usuario"
            className="nav_img-avatar"
          />
        </div>
      </nav>
    </header>
  );
}
