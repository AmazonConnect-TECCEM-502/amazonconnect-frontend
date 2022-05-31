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

export default ManagerSettings;
