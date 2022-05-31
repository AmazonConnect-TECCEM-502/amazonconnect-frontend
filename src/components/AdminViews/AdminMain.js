import AgentProvider from "../AgentView/AgentProvider";
import NavBarAdmin from "../NavBar/NavBarAdmin";


function AdminMain() {
  return (
    <AgentProvider>
      <NavBarAdmin />
      <div className="manager-container">
        <h1>Welcome home,</h1>
        <h1>Rosa!</h1>
      </div>
    </AgentProvider>
  );
}

export default AdminMain;
