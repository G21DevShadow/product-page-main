import "./slider.css";

import { LIST_OF_IMAGES_LARGE } from "../../utils/constants";
import { LIST_OF_IMAGES_SMALL } from "../../utils/constants";
import { RELATIVE_PATHS } from "../../routes/relativePaths";
import { useCounter } from "../../Hooks/counter";

export function Slider() {
  const lastImg = LIST_OF_IMAGES_LARGE.length - 1;
  const { counter, randomCounter, increaseCounter, decreaseCounter } =
    useCounter();

  return (
    <section className="container_slider">
      <figure className="container_figure">
        <img
          className="container_img"
          src={`${LIST_OF_IMAGES_LARGE[counter]}`}
          alt="Imagen de producto"
        />

        <a
          href="#"
          className={`icon_arrow icon_arrow-left ${
            counter === 0 ? "icon_arrow-inactive" : ""
          }`}
          onClick={decreaseCounter}
        >
          <img
            className="icon-arrow-img"
            src={`${RELATIVE_PATHS}icons/icon-previous.svg`}
            alt="Icono a la derecha"
          />
        </a>

        <a
          href="#"
          className={`icon_arrow icon_arrow-right ${
            counter === lastImg ? "icon_arrow-inactive" : ""
          }`}
          onClick={increaseCounter}
        >
          <img
            className="icon-arrow-img"
            src={`${RELATIVE_PATHS}icons/icon-previous.svg`}
            alt="Icono a la izquierda"
          />
        </a>
      </figure>

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
    </section>
  );
}
