import "./menu.css";
import { RELATIVE_PATHS } from "../../routes/relativePaths";

export function Menu({ isActiveMenu, activateMenu }) {
  return (
    <>
      <div
        className={`gradient ${isActiveMenu ? "gradient-active" : ""}`}
      ></div>
      <div className={`menu ${isActiveMenu ? "menu-active" : ""}`}>
        <ul className="menu_list">
          <li className="menu_item">
            <img
              src={`${RELATIVE_PATHS}/icons/icon-close.svg`}
              alt=""
              className="menu_icon-close"
              onClick={activateMenu}
            />
          </li>
          <li className="menu_item">
            <a href="#" className="menu_link">
              Collections
            </a>
          </li>
          <li className="menu_item">
            <a href="#" className="menu_link">
              Men
            </a>
          </li>
          <li className="menu_item">
            <a href="#" className="menu_link">
              Women
            </a>
          </li>
          <li className="menu_item">
            <a href="#" className="menu_link">
              About
            </a>
          </li>
          <li className="menu_item">
            <a href="#" className="menu_link">
              Concat
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
