import NavBarManager from "../NavBar/NavBarManager";
import Card from "../AgentCards/Card";
import AgentProvider from "../AgentView/AgentProvider";
import Settings from "../AgentCards/Setting";

function ManagerSettings() {
  return (
    <div>
      <AgentProvider>
        <NavBarManager />
        <div className="user-settings">
          <Card id="card-7" draggable="true" component={<Settings />} />
        </div>
      </AgentProvider>
    </div>
  );
}

export default ManagerSettings;
