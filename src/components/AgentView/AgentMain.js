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
import NavBar from "../NavBar/NavBar";
import AgentProvider from "./AgentProvider";
import KeystrokeRecording from "../Recordings/KeystrokeRecording";
import SalesMasterCard from "../SalesCard/SalesMasterCard";
import AmazonCCP from "../AgentCards/AmazonCCP";
import ClientProvider from "../ClientCard/ClientProvider";

function AgentMain() {
  return (
    <AgentProvider>
    <ClientProvider>
      <NavBar />
      <div className="agent-container">
        <AgentBoard id="board-1" className="board board-menu">
          <Card id="card-1" draggable="false" component={<Menu />} />
          <Card id="card-2" draggable="false" component={<Recording />} />
          <Card id="card-7" draggable="false" component={<KeystrokeRecording />} />
          <Card id="card-0" draggable="false" component={<AmazonCCP />}/>
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
          <Card
            id="card-4"
            draggable="true"
            component={
              <ClientCard />
            }
          />
          <Card
            id="card-8"
            draggable="true"
            component={
              <SalesMasterCard />
            }
          />
        </AgentBoard>
      </div>
    </ClientProvider>
    </AgentProvider>
  );
}

export default AgentMain;
