/*
  Author: Eric Alexis Castañeda Bravo
  Description: Show the info of the user and allow him to 
  change Name and Last name

  Usage:
  <AgentSettings />
*/

import AgentBoard from "../AgentCards/AgentBoard";
import Card from "../AgentCards/Card";
import CardsProvider from "../AgentCards/CardsProvider";
import Settings from "../AgentCards/Setting";
import NavBar from "../NavBar/NavBar";

function AgentSettings() {
  return (
    <div>
      <CardsProvider>
        <NavBar />
        <div
          className="manager-dashboard-container"
          style={{ justifyContent: "space-around" }}
        >
          <AgentBoard id="board-4" className="board board-menu profile-card">
            <Card id="card-7" draggable="true" component={<Settings />} />
          </AgentBoard>
        </div>
      </CardsProvider>
    </div>
  );
}

export default AgentSettings;
