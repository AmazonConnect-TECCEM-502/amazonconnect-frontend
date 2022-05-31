/*
  Author: Maria Fernanda Ramirez Barragan
  Description: It displays each agent in the database
  and show them to the manager in order to get each agent 
  dashboards
*/

import AgentProvider from "../AgentView/AgentProvider";
import NavBarManager from "../NavBar/NavBarManager";
import Card from "../AgentCards/Card";
import Agents from "../ManagerCards/Agents";
import AgentBoard from "../AgentCards/AgentBoard";

function ManagerAgentsDashboard() {
  return (
    <AgentProvider>
      <NavBarManager />
      <div className="manager-dashboard-container">
        <AgentBoard id="board-4" className="board board-menu">
          <Card id="manager-agents-menu" draggable="false" component={<Agents />} />
        </AgentBoard>
      </div>
    </AgentProvider>
  );
}

export default ManagerAgentsDashboard;
