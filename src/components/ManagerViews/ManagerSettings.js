import NavBarManager from "../NavBar/NavBarManager";
import AgentBoard from "../AgentCards/AgentBoard";
import Card from "../AgentCards/Card";
import CardsProvider from "../AgentCards/CardsProvider";
import Settings from "../AgentCards/Setting";

function ManagerSettings() {
  return (
    <div>
      <CardsProvider>
        <NavBarManager />
        <div className="user-settings">
          <Card id="card-7" draggable="true" component={<Settings />} />
        </div>
      </CardsProvider>
    </div>
  );
}

export default ManagerSettings;
