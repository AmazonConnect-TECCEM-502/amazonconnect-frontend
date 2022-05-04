import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/AgentCards/Card";
import UserCard from "./components/UserCard/UserCard"
import AnswerList from "./components/AgentCards/AnswerList";
import ProductCard from "./components/SalesCard/ProductCard";
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
      <Card component = {<UserCard  image = "TelmexLogo" 
                                    fname = "John" 
                                    lname = "Doe"
                                    email = "example@gmail.com"
                                    phone = "55 5555 5555" />}/>
      <Card component = {<ProductCard image = "ejemploTelmex"
                                      name = "Internet Paquete"
                                      price = "56"
                                      desc = "bla bla"  />}/>
    </div>
  );
}

export default App;
