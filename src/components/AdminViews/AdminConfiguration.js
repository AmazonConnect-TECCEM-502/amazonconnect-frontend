import AgentBoard from "../AgentCards/AgentBoard"
import MenuConfiguration from "../Menu/MenuConfiguration"
import NavBarAdmin from "../NavBar/NavBarAdmin";
import NewQuestion from "../AdminCards/NewQuestion";
import NewProduct from "../AdminCards/NewProduct";
import NewUser from "../AdminCards/NewUser";
import UpdateUser from "../AdminCards/UpdateUser";
import UpdateQuestion from "../AdminCards/UpdateQuestion";
import UpdateProduct from "../AdminCards/UpdateProduct";
import AdminCardProvider from "../AdminCards/AdminCardProvider";
import AdminCard from "../AdminCards/AdminCard";

function AdminConfiguration() {
  return (
    <AdminCardProvider>
    <NavBarAdmin />
    <div className="agent-container">
      <AgentBoard id="board-1" className="board board-menu">
        <AdminCard id="card-1" draggable="false" component={<MenuConfiguration/>} />
      </AgentBoard>
      
      <AgentBoard id="board-2" className="board board-menu">
        <AdminCard id="card-4" draggable="false" component={<NewQuestion/>} />
        <AdminCard id="card-6" draggable="false" component={<NewUser/>} />
        <AdminCard id="card-7" draggable="false" component={<UpdateUser/>} />
      </AgentBoard>

      <AgentBoard id="board-3" className="board board-menu">
      <AdminCard id="card-5" draggable="false" component={<UpdateQuestion/>} />
        <AdminCard id="card-8" draggable="false" component={<NewProduct/>} />
        <AdminCard id="card-9" draggable="false" component={<UpdateProduct/>} />
      </AgentBoard>
    </div>
    </AdminCardProvider>
  );
}

export default AdminConfiguration;