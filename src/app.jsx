//Componentes
import { Header } from "./components/headers";
import { Menu } from "./components/menu";
import { Slider } from "./components/slider";
import { Texts } from "./components/texts";

//Hook
import { useToggle } from "./Hooks/activate";

function App() {
  const { state: isMenuActive, activate: toggleMenu } = useToggle();
  return (
    <main>
      <Header activate={toggleMenu} />
      <Menu isActive={isMenuActive} activate={toggleMenu} />

      <section className="container">
        <Slider />
        <Texts />
      </section>
    </main>
  );
}

export default App;
