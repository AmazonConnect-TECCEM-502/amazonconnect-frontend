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
      <div>
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
                                      desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie dui quam. Aenean egestas volutpat mauris non tincidunt. Pellentesque maximus a enim sed mollis. Suspendisse lacus risus, cursus a blandit sit amet, sollicitudin vitae quam. Morbi vulputate venenatis ipsum id auctor. Sed sodales nulla sapien, sit amet interdum lorem mollis vitae. In ut sem turpis. Nulla faucibus, ante eget rhoncus venenatis, ipsum massa congue purus, fringilla elementum purus purus et nunc. Curabitur id risus sed lorem viverra semper vel id metus. Praesent vitae bibendum augue."  />}/>
      </div>
    </div>
  );
}

export default App;
