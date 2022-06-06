import Card from "../AgentCards/Card";
import AgentProvider from "../AgentView/AgentProvider";
import Settings from "../AgentCards/Setting";

function AdminSettings(props) {
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

export default AdminSettings;
