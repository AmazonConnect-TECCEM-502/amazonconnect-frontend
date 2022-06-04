/*
  Author: Maria Fernanda Ramirez Barragan
  Description: It displays each agent in the database
  and show them to the manager in order to get each agent 
  dashboards
*/

import AgentProvider from "../AgentView/AgentProvider";
import Card from "../AgentCards/Card";
import Agents from "../ManagerCards/Agents";
import AgentBoard from "../AgentCards/AgentBoard";

function ManagerAgentsDashboard() {
  return (
    <div>
      <iframe
        height="900"
        width="1200"
        src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/559202700801/dashboards/c5a9e5b8-1d67-4e0c-9785-d58175d18898?directory_alias=amazonconnectbancos#p.manager=1"
      ></iframe>
    </div>
  );
}

export default ManagerAgentsDashboard;
