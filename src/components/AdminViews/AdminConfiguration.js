import AgentBoard from "../AgentCards/AgentBoard"
import MenuConfiguration from "../Menu/MenuConfiguration"
import NavBarAdmin from "../NavBar/NavBarAdmin";
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
import ClientForms from "../ClientCard/ClientForms";
import AdminContextProvider from "../AdminCards/AdminContextProvider";
import NewProblem from "../AdminCards/NewProblem";
import ProposalsList from "../AdminCards/ProposalsList";
import ClientProvider from "../ClientCard/ClientProvider";

function AdminConfiguration() {
  return (
    <AdminCardProvider>
    <AdminContextProvider>
    <ClientProvider>
    <NavBarAdmin />
    <div className="agent-container admin">
      <AgentBoard id="board-1" className="board board-menu">
        <AdminCard id="card-1" draggable="false" component={<MenuConfiguration/>} />
        <AdminCard id="card-10" draggable="true" component={<ClientForms/>} />
        <AdminCard id="card-11" draggable="true" component={<NewCategory/>} />
      </AgentBoard>
      
      <AgentBoard id="board-2" className="board board-menu">
        <AdminCard id="card-4" draggable="true" component={<NewProblem/>} />
        <AdminCard id="card-6" draggable="true" component={<NewUser/>} />
        <AdminCard id="card-8" draggable="true" component={<NewProduct/>} />
      </AgentBoard>

      <AgentBoard id="board-3" className="board board-menu">
        <AdminCard id="card-5" draggable="true" component={<UpdateQuestionList/>} />
        <AdminCard id="card-9" draggable="true" component={<UpdateProduct/>} />
        <AdminCard id="card-7" draggable="true" component={<UpdateUser/>} />
        <AdminCard id="card-12" draggable="true" component={<UpdateAnswerList />} />
        <AdminCard id="card-13" draggable="true" component={<NewAnswer/>}/>
        <AdminCard id="card-14" draggable="true" component={<ProposalsList/>}/>
      </AgentBoard>
    </div>
    </ClientProvider>
    </AdminContextProvider>
    </AdminCardProvider>
  );
}

export default AdminConfiguration;