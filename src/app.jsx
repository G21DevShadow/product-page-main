//Componentes
import { Header } from "./components/headers";
import { Menu } from "./components/menu";
import { Slider } from "./components/slider";
import { Texts } from "./components/texts";
import { FloatingSlider } from "./components/floatSlider";

//Hook
import { useToggle } from "./Hooks/activate";
import { useCounter } from "./Hooks/counter";

function App() {
  const { state: isMenuActive, activate: toggleMenu } = useToggle();
  const { state: isFloatingActive, activate: toggleFloating } = useToggle();
  const { counter, randomCounter, increaseCounter, decreaseCounter } =
    useCounter();

  return (
    <main>
      <Header activate={toggleMenu} />
      <Menu isActive={isMenuActive} activate={toggleMenu} />

      <section className="container">
        <Slider
          activate={toggleFloating}
          counter={counter}
          randomCounter={randomCounter}
          decreaseCounter={decreaseCounter}
          increaseCounter={increaseCounter}
        />
        <Texts />
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
