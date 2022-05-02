import "./App.css";
import ListaCategoriasProblemas from "./components/ListaCategoriasProblemas";
import NavBar from "./components/NavBar/NavBar";
import Tarjeta from "./components/Tarjeta";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Tarjeta componente={<ListaCategoriasProblemas />} />
    </div>
  );
}

export default App;
