import NavBarAdmin from "../NavBar/NavBarAdmin";
import Card from "../AgentCards/Card";
import AgentProvider from "../AgentView/AgentProvider";
import Settings from "../AgentCards/Setting";
import ThemeOptions from "../AgentCards/ThemeOptions";

function AdminSettings(props) {
  return (
    <div>
      <AgentProvider>
        <NavBarAdmin />
        <div className="user-settings">
          <Card id="" draggable="" component={<Settings />} />
        </div>
        <ThemeOptions newTheme={props.newTheme} />
      </AgentProvider>
    </div>
  );
}

export default AdminSettings;
