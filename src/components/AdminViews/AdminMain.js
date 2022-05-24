import CardsProvider from "../AgentCards/CardsProvider";
import NavBarAdmin from "../NavBar/NavBarAdmin";


function AdminMain() {
  return (
    <CardsProvider>
    <NavBarAdmin />
    <div className="manager-container">
      <h1>Welcome home,</h1>
      <h1>Rosa!</h1>
    </div>
    </CardsProvider>
  );
}

export default AdminMain;
