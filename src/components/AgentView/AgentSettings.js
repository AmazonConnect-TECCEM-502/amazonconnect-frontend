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
import ThemeOptions from "../AgentCards/ThemeOptions";

function AgentSettings(props) {
  return (
    <div>
      <AgentProvider>
        <div className="user-settings">
          <Card id="" draggable="" component={<Settings />} />
        </div>
        <ThemeOptions newTheme={props.newTheme} />
      </AgentProvider>
    </div>
  );
}

export default AgentSettings;
