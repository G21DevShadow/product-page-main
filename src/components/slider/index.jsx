import "./slider.css";

import { LIST_OF_IMAGES_LARGE } from "../../utils/list-Images.js";
import { RELATIVE_PATHS } from "../../routes/relativePaths";

//importar componente
import { ListImg } from "../list-images";

import { useCounter } from "../../Hooks/counter.jsx";

export function Slider({ activateFloating }) {
  const { counter, increaseCounter, decreaseCounter } = useCounter();

  const lastImg = LIST_OF_IMAGES_LARGE.length - 1;

  return (
    <section className="container_slider">
      <figure className="container_figure">
        <img
          className="container_img"
          src={`${LIST_OF_IMAGES_LARGE[counter]}`}
          alt="Imagen de producto"
          onClick={activateFloating}
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

      <ListImg />
    </section>
  );
}
