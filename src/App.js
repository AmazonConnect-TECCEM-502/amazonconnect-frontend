import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/AgentCards/Card";
import AnswerList from "./components/AgentCards/AnswerList";
import "./style/style.css";
import QuestionList from "./components/AgentCards/QuestionList";
import ProblemCategoryList from "./components/AgentCards/ProblemCategoryList";
import Menu from "./components/Menu/Menu"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Card component= {<AnswerList/>} />
      <Card component = {<QuestionList/>}/>
      <Card component = {<ProblemCategoryList/>}/>
      <Card component = {<Menu/>}/>
    </div>
  );
}

export default App;
