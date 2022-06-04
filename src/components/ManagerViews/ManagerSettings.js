import Card from "../AgentCards/Card";
import AgentProvider from "../AgentView/AgentProvider";
import Settings from "../AgentCards/Setting";

function ManagerSettings(props) {
  return (
    <div>
      <AgentProvider>
        <div className="user-settings">
          <Card id="" draggable="" component={<Settings />} />
        </div>
      </AgentProvider>
    </div>
  );
}

export default ManagerSettings;
