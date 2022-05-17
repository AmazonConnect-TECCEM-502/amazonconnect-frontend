/*
  Author: Diego Armando Ulibarri Hernández
  Description: groups the boards and the cards 
  that the agent will occupy

  Usage:
  <AgentMain />
*/

import AgentBoard from "./AgentCards/AgentBoard";
import Card from "./AgentCards/Card";
import Menu from "./Menu/Menu";
import Recording from "./Recordings/Recording";
import QuestionList from "./AgentCards/QuestionList";
import UserCard from "./UserCard/UserCard";
import ProblemCategoryList from "./AgentCards/ProblemCategoryList";
import AnswerList from "./AgentCards/AnswerList";
import ProductCard from "./SalesCard/ProductCard";

function AgentMain() {
  return (
    <div className="agent-container">
      <AgentBoard id="board-1" className="board board-menu">
        <Card id="card-1" draggable="false" component={<Menu />} />
        <Card id="card-2" draggable="false" component={<Recording />} />
      </AgentBoard>

      <AgentBoard id="board-2" className="board">
        <Card id="card-3" draggable="true" component={<QuestionList />} />
        <Card
          id="card-5"
          draggable="true"
          component={<ProblemCategoryList />}
        />
        <Card id="card-6" draggable="true" component={<AnswerList />} />
      </AgentBoard>

      <AgentBoard id="board-3" className="board">
        <Card
          id="card-4"
          draggable="true"
          component={
            <UserCard
              image="IconClient"
              fname="Rosa"
              lname="Example"
              email="example@gmail.com"
              phone="55 5555 5555"
            />
          }
        />
        <Card
          id="card-7"
          draggable="true"
          component={
            <ProductCard
              image="ejemploTelmex"
              name="Internet plan"
              price="100"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie dui quam. Aenean egestas volutpat mauris non tincidunt. Pellentesque maximus a enim sed mollis. Suspendisse lacus risus, cursus a blandit sit amet, sollicitudin vitae quam. Morbi vulputate venenatis ipsum id auctor. Sed sodales nulla sapien, sit amet interdum lorem mollis vitae. In ut sem turpis. Nulla faucibus, ante eget rhoncus venenatis, ipsum massa congue purus, fringilla elementum purus purus et nunc. Curabitur id risus sed lorem viverra semper vel id metus. Praesent vitae bibendum augue."
            />
          }
        />
      </AgentBoard>
    </div>
  );
}

export default AgentMain;
