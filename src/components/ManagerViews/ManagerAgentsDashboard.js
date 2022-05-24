import CardsProvider from "../AgentCards/CardsProvider";
import NavBarManager from "../NavBar/NavBarManager";

function ManagerAgentsDashboard() {
  return(
    <CardsProvider>
    <NavBarManager />
    <div className="manager-container">
    </div>
    </CardsProvider>
  );
}

export default ManagerAgentsDashboard;
