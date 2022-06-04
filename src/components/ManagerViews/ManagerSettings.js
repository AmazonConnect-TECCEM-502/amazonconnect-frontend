import Card from "../AgentCards/Card";
import AgentProvider from "../AgentView/AgentProvider";
import Settings from "../AgentCards/Setting";
import ThemeOptions from "../AgentCards/ThemeOptions";

function ManagerSettings(props) {
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

export default ManagerSettings;
