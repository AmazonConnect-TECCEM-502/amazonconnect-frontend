import AgentBoard from "../AgentCards/AgentBoard"
import MenuConfiguration from "../Menu/MenuConfiguration"
import NavBarAdmin from "../NavBar/NavBarAdmin";
import NewQuestion from "../AdminCards/NewQuestion";
import NewProduct from "../AdminCards/NewProduct";
import NewUser from "../AdminCards/NewUser";
import UpdateUser from "../AdminCards/UpdateUser";
import UpdateProduct from "../AdminCards/UpdateProduct";
import AdminCard from "../AdminCards/AdminCard";
import NewCategory from "../AdminCards/NewCategory";
import UpdateQuestionList from "../AdminCards/UpdateQuestionList";
import UpdateAnswerList from "../AdminCards/UpdateAnswerList";
import AdminCardProvider from "../AdminCards/AdminCardProvider";
import NewAnswer from "../AdminCards/NewAnswer";

function AdminConfiguration() {
  return (
    <AdminCardProvider>
    <NavBarAdmin />
    <div className="agent-container admin">
      <AgentBoard id="board-1" className="board board-menu">
        <AdminCard id="card-1" draggable="false" component={<MenuConfiguration/>} />
        {/*<AdminCard id="card-10" draggable="false" component={<ClientCard/>} />*/}
        <AdminCard id="card-11" draggable="true" component={<NewCategory/>} />
      </AgentBoard>
      
      <AgentBoard id="board-2" className="board board-menu">
        <AdminCard id="card-4" draggable="true" component={<NewQuestion/>} />
        <AdminCard id="card-6" draggable="true" component={<NewUser/>} />
        <AdminCard id="card-8" draggable="true" component={<NewProduct/>} />
      </AgentBoard>

      <AgentBoard id="board-3" className="board board-menu">
        <AdminCard id="card-5" draggable="true" component={<UpdateQuestionList/>} />
        <AdminCard id="card-9" draggable="true" component={<UpdateProduct/>} />
        <AdminCard id="card-7" draggable="true" component={<UpdateUser/>} />
        <AdminCard id="card-12" draggable="true" component={<UpdateAnswerList />} />
        <AdminCard id="card-13" draggable="true" component={<NewAnswer/>}/>
      </AgentBoard>
    </div>
    </AdminCardProvider>
  );
}

export default AdminConfiguration;