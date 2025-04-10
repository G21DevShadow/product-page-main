import "./floatSlider.css";
import { LIST_OF_IMAGES_LARGE } from "../../utils/list-Images.js";

import { ListImg } from "../list-images";

import { useCounter } from "../../Hooks/counter.jsx";
export function FloatingSlider({ deactivateFloating }) {
  const lastImg = LIST_OF_IMAGES_LARGE.length - 1;

  const { counter, randomCounter, increaseCounter, decreaseCounter } =
    useCounter();
  return (
    <section className="floatingContainer">
      <div className="floating_gradient"></div>

      <div className="floating_slider">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#ffff"
          className="floating_imgs close_image"
          onClick={deactivateFloating}
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>

        <figure className="floating_figure">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000"
            className={`floating_imgs floating_previous-icon floating_icon-arrow ${
              counter === 0 ? "icon_arrow-inactive" : ""
            }`}
            onClick={decreaseCounter}
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>

          <img
            src={`${LIST_OF_IMAGES_LARGE[counter]}`}
            alt=""
            className="floating_img"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000"
            className={`floating_imgs floating_next-icon floating_icon-arrow ${
              counter === lastImg ? "icon_arrow-inactive" : ""
            }`}
            onClick={increaseCounter}
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </figure>

        <ListImg counter={counter} randomCounter={randomCounter} />
      </div>
    </section>
  );
}
