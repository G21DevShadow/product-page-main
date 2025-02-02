//Componentes
import { Header } from "./components/headers";
import { Menu } from "./components/menu";
import { Slider } from "./components/slider";
import { Texts } from "./components/texts";
import { FloatingSlider } from "./components/floatSlider";
import { ShoppingCart } from "./components/shoppingCart";

//Hook
import { useToggle } from "./Hooks/activate";
import { useCounter } from "./Hooks/counter";
import useAddToCart from "./Hooks/addToCart";

function App() {
  const { state: isMenuActive, activate: toggleMenu } = useToggle();
  const { state: isFloatingActive, activate: toggleFloating } = useToggle();
  const { state: isShoppingCartActive, activate: toggleShoppingCart } =
    useToggle();

  const { counter, randomCounter, increaseCounter, decreaseCounter } =
    useCounter();

  const { cart, addCart, emptyCart } = useAddToCart();

  return (
    <main>
      <Header
        activateMenu={toggleMenu}
        activateCart={toggleShoppingCart}
        cart={cart}
      />
      {isShoppingCartActive && (
        <ShoppingCart cart={cart} removeCart={emptyCart} />
      )}

      <Menu isActive={isMenuActive} activate={toggleMenu} />

      <section className="container">
        <Slider
          activate={toggleFloating}
          counter={counter}
          randomCounter={randomCounter}
          decreaseCounter={decreaseCounter}
          increaseCounter={increaseCounter}
        />
        <Texts addToCart={addCart} />
      </section>

      <>
        {isFloatingActive && (
          <FloatingSlider
            activate={toggleFloating}
            counter={counter}
            randomCounter={randomCounter}
            decreaseCounter={decreaseCounter}
            increaseCounter={increaseCounter}
          />
        )}
      </>
    </main>
  );
}

export default App;
