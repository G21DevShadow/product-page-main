import "./list.css";

import { LIST_OF_IMAGES_SMALL } from "../../utils/list-Images.js";

export function ListImg({ counter, randomCounter }) {
  return (
    <ul className="list_images-small">
      {LIST_OF_IMAGES_SMALL.map((img, index) => {
        return (
          <li
            key={index}
            className={`list_item-img`}
            onClick={() => randomCounter(index)}
          >
            <img
              key={index}
              src={`${img}`}
              alt="Imagen pequeña del producto"
              className={`list_img ${
                counter === index ? "list_img--active" : ""
              } `}
            />
            <span
              className={`list_gradient ${
                counter === index ? "list_gradient-active" : ""
              } `}
            ></span>
          </li>
        );
      })}
    </ul>
  );
}
