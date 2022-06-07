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
import AgentProvider from "./AgentProvider";
import KeystrokeRecording from "../Recordings/KeystrokeRecording";
import SalesMasterCard from "../SalesCard/SalesMasterCard";
import AmazonCCP from "../AgentCards/AmazonCCP";
import AddSolutionModal from "../AgentCards/AddSolutionModal";
import { useEffect, useState } from "react";
import ClientProvider from "../ClientCard/ClientProvider";
import { useNavigate } from "react-router";

function AgentMain() {
  const user_type = localStorage.getItem("user_type");
  const navigate = useNavigate();
  /* state of modal  */
  const [modal, setModal] = useState(false);
  
  // Check if modal is displayed so agent can't scroll the page
  /* Checking if the user is an agent, if not it will redirect to the previous page. */
  useEffect(() => {
    if (modal) {
      document.querySelector("body").scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "auto";
    }

    if(user_type === ""){
      navigate("/");
    }
    else if(user_type !== "agent"){
      navigate(-1);
    }
  }, [user_type, navigate, modal]);

  /**
   * When the user clicks the button, the modal will be set to true.
   * @param modal - modal value (true/false)
   */
  const addNewSolution = (modal) => {
    setModal(modal);
  };


  if(user_type === "agent"){
    return (
      <AgentProvider>
        <ClientProvider>
          {modal && <AddSolutionModal addSolution={addNewSolution} />}
          <div className="agent-container">
            <AgentBoard id="board-1" className="board board-menu">
              <Card id="card-1" draggable="false" component={<Menu />} />
              <Card id="card-2" draggable="true" component={<Recording />} />
              <Card
                id="card-7"
                draggable="true"
                component={<KeystrokeRecording />}
              />
              <Card id="card-0" draggable="false" component={<AmazonCCP />} />
            </AgentBoard>
  
            <AgentBoard id="board-2" className="board">
              <Card
                id="card-5"
                draggable="true"
                component={<ProblemCategoryList />}
              />
              <Card id="card-3" draggable="true" component={<QuestionList />} />
              <Card
                id="card-6"
                draggable="true"
                component={<AnswerList addSolution={addNewSolution} />}
              />
            </AgentBoard>
  
            <AgentBoard id="board-3" className="board">
              <Card id="card-4" draggable="true" component={<ClientCard />} />
              <Card
                id="card-8"
                draggable="true"
                component={<SalesMasterCard />}
              />
            </AgentBoard>
          </div>
        </ClientProvider>
      </AgentProvider>
    );
  }
}

export default AgentMain;
