/*
  Author: Diego Armando Ulibarri Hernández
  Description: groups the boards and the cards 
  that the agent will occupy

  Usage:
  <AgentMain />
*/

import AgentBoard from "../AgentCards/AgentBoard";
import Card from "../AgentCards/Card";
import Menu from "../Menu/Menu";
import Recording from "../Recordings/Recording";
import QuestionList from "../AgentCards/QuestionList";
import ClientCard from "../ClientCard/ClientCard";
import ProblemCategoryList from "../AgentCards/ProblemCategoryList";
import AnswerList from "../AgentCards/AnswerList";
import ProductCard from "../SalesCard/ProductCard";
import NavBar from "../NavBar/NavBar";
import CardsProvider from "../AgentCards/CardsProvider";
import ProductsCategoryList from "../SalesCard/ProductsCategoryList";
import KeystrokeRecording from "../Recordings/KeystrokeRecording";
import SalesMasterCard from "../SalesCard/SalesMasterCard";
import AmazonCCP from "../AgentCards/AmazonCCP";

function AgentMain() {
  return (
    <CardsProvider>
      <NavBar />
      <div className="agent-container">
        <AgentBoard id="board-1" className="board board-menu">
          <Card id="card-1" draggable="false" component={<Menu />} />
          <Card id="card-2" draggable="false" component={<Recording />} />
          <Card id="card-9" draggable="false" component={<KeystrokeRecording />} />
        </AgentBoard>

        <AgentBoard id="board-2" className="board">
          <Card
            id="card-5"
            draggable="true"
            component={<ProblemCategoryList />}
          />
          <Card id="card-3" draggable="true" component={<QuestionList />} />
          <Card id="card-6" draggable="true" component={<AnswerList />} />
        </AgentBoard>


        <AgentBoard id="board-3" className="board">
          <Card id="card-0" draggable="true" component={<AmazonCCP />}/>
          <Card
            id="card-4"
            draggable="true"
            component={
              <ClientCard
                image="IconClient"
                fname="Rosa"
                lname="Example"
                email="example@gmail.com"
                phone="55 5555 5555"
              />
            }
          />
          <Card id="card-8" draggable="true" component={<ProductsCategoryList />}/>
          <Card
            id="card-7"
            draggable="true"
            component={
              <SalesMasterCard />
            }
          />
        </AgentBoard>
      </div>
    </CardsProvider>
  );
}

export default AgentMain;
