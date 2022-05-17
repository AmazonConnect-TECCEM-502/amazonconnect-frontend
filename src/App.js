import "./App.css";
import CardsProvider from "./components/AgentCards/CardsProvider";
import AgentMain from "./components/AgentMain";
import NavBar from "./components/NavBar/NavBar";
import "./style/style.css";

function App() {
  return (
    <CardsProvider>
      <div className="App">
        <NavBar />
        <AgentMain />
      </div>
    </CardsProvider>
  );
}

export default App;
