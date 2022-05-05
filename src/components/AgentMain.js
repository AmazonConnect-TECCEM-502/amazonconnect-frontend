import React from "react";
import AgentBoard from "./AgentCards/AgentBoard";
import Card from "./AgentCards/Card";
import AnswerList from "./AgentCards/AnswerList"
import ProblemCategoryList from "./AgentCards/ProblemCategoryList"

function AgentMain() {
  return (
    <div className="agent-container">
      <AgentBoard id="board-1" className="board">
        <Card id="card-1" draggable="true" component={<ProblemCategoryList />} />
      </AgentBoard>
      <AgentBoard id="board-2" className="board">
        <Card id="card-2" draggable="true" component={<AnswerList />} />
      </AgentBoard>
    </div>
  );
}

export default AgentMain;
