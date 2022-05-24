import CardsProvider from "../AgentCards/CardsProvider";
import AgentBoard from "../AgentCards/AgentBoard"
import Card from "../AgentCards/Card"
import ManagerMenu from "../Menu/ManagerMenuSettings"
import NavBarManager from "../NavBar/NavBarManager";

function ManagerSettings() {
  return (
    <CardsProvider>
    <NavBarManager />
    <div className="agent-container">
      <AgentBoard id="board-1" className="board board-menu">
        <Card id="card-1" draggable="false" component={<ManagerMenu />} />
      </AgentBoard>
      
      <AgentBoard id="board-1" className="board board-menu">
      </AgentBoard>

      <AgentBoard id="board-1" className="board board-menu">
      </AgentBoard>
    </div>
    </CardsProvider>
  );
}

export default ManagerSettings;