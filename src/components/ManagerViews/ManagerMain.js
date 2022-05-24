import CardsProvider from "../AgentCards/CardsProvider";
import NavBarManager from "../NavBar/NavBarManager";

function ManagerMain() {
  return (
    <CardsProvider>
    <NavBarManager />
    <div className="manager-container">
      <h1>Welcome home,</h1>
      <h1>Rosa!</h1>
    </div>
    </CardsProvider>
  );
}

export default ManagerMain;
