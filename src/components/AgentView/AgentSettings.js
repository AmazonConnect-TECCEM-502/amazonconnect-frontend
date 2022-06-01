/*
  Author: Eric Alexis Castañeda Bravo
  Description: Show the info of the user and allow him to 
  change Name and Last name

  Usage:
  <AgentSettings />
*/

import Card from "../AgentCards/Card";
import AgentProvider from "../AgentView/AgentProvider";
import Settings from "../AgentCards/Setting";
import NavBar from "../NavBar/NavBar";

function AgentSettings() {
  return (
    <div>
      <AgentProvider>
        <NavBar />
        <div className="user-settings">
          <Card id="" draggable="" component={<Settings />} />
        </div>
      </AgentProvider>
    </div>
  );
}

export default AgentSettings;
