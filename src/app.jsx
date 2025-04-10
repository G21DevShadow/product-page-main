//Componentes
import { Header } from "./components/headers";
import { Menu } from "./components/menu";
import { Slider } from "./components/slider";
import { Texts } from "./components/texts";
import { FloatingSlider } from "./components/floatSlider";
import { ShoppingCart } from "./components/shoppingCart";

//reducer
import { useRState } from "./reducer/useRState";

function App() {
  const { state, toggleFloating, toggleMenu, toggleShoppingCart } = useRState();

  return (
    <main>
      <Header
        activateMenu={toggleMenu}
        activateShoppingCart={toggleShoppingCart}
      />
      {state.isShoppingCartActive && <ShoppingCart />}

      <Menu isActiveMenu={state.isMenuActive} activateMenu={toggleMenu} />

      <section className="container">
        <Slider activateFloating={toggleFloating} />
        <Texts />
      </section>

      <>
        {state.isFloatingActive && (
          <FloatingSlider deactivateFloating={toggleFloating} />
        )}
      </>
    </main>
  );
}

export default App;
