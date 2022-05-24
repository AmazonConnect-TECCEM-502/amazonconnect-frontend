import CardsProvider from "../AgentCards/CardsProvider";
import AgentBoard from "../AgentCards/AgentBoard"
import Card from "../AgentCards/Card"
import MenuConfiguration from "../Menu/MenuConfiguration"
import NavBarAdmin from "../NavBar/NavBarAdmin";

function AdminConfiguration() {
  return (
    <CardsProvider>
    <NavBarAdmin />
    <div className="agent-container">
      <AgentBoard id="board-1" className="board board-menu">
        <Card id="card-1" draggable="false" component={<MenuConfiguration/>} />
      </AgentBoard>
      
      <AgentBoard id="board-1" className="board board-menu">
      </AgentBoard>

      <AgentBoard id="board-1" className="board board-menu">
      </AgentBoard>
    </div>
    </CardsProvider>
  );
}

export default AdminConfiguration;