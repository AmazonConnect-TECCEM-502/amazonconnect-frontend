import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/AgentCards/Card";
import AnswerList from "./components/AgentCards/AnswerList";
import ProductCard from "./components/SalesCard/ProductCard";
import "./style/style.css";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Card component= {<AnswerList/>} />
    </div>
  );
}

export default App;
