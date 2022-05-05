/*
  Author: Diego Armando Ulibarri Hernández
  Description:

  Usage:

  <AgentBoard />
*/

import AgentBoard from "./AgentCards/AgentBoard";
import Card from "./AgentCards/Card";
import AnswerList from "./AgentCards/AnswerList";
import ProblemCategoryList from "./AgentCards/ProblemCategoryList";
import UserCard from "./UserCard/UserCard";
import ProductCard from "./SalesCard/ProductCard";
import QuestionList from "./AgentCards/QuestionList";
import Menu from "./Menu/Menu";
import Recording from "./Recordings/Recording";

function AgentMain() {
  return (
    <div className="agent-container">
      <AgentBoard id="board-1" className="board board-menu">
        <Card id="card-1" draggable="false" component={<Menu />} />
        <Card id="card-7" draggable="false" component={<Recording />} />
      </AgentBoard>

      <AgentBoard id="board-2" className="board">
        <Card
          id="card-5"
          draggable="true"
          component={
            <UserCard
              image="TelmexLogo"
              fname="John"
              lname="Doe"
              email="example@gmail.com"
              phone="55 5555 5555"
            />
          }
        />
        <Card id="card-3" draggable="true" component={<QuestionList />} />
        <Card
          id="card-2"
          draggable="true"
          component={<ProblemCategoryList />}
        />
      </AgentBoard>

      <AgentBoard id="board-3" className="board">
        <Card id="card-4" draggable="true" component={<AnswerList />} />
        <Card
          id="card-6"
          draggable="true"
          component={
            <ProductCard
              image="ejemploTelmex"
              name="Internet Paquete"
              price="56"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie dui quam. Aenean egestas volutpat mauris non tincidunt. Pellentesque maximus a enim sed mollis. Suspendisse lacus risus, cursus a blandit sit amet, sollicitudin vitae quam. Morbi vulputate venenatis ipsum id auctor. Sed sodales nulla sapien, sit amet interdum lorem mollis vitae. In ut sem turpis. Nulla faucibus, ante eget rhoncus venenatis, ipsum massa congue purus, fringilla elementum purus purus et nunc. Curabitur id risus sed lorem viverra semper vel id metus. Praesent vitae bibendum augue."
            />
          }
        />
      </AgentBoard>
    </div>
  );
}

export default AgentMain;
