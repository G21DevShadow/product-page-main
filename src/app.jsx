//Componentes
import { Header } from "./components/headers";
import { Menu } from "./components/menu";

//Hook
import { useToggle } from "./Hooks/activate";

function App() {
  const { state: isMenuActive, activate: toggleMenu } = useToggle();
  return (
    <main>
      <Header activate={toggleMenu} />
      <Menu isActive={isMenuActive} activate={toggleMenu} />
    </main>
  );
}

export default App;
