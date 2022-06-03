import AgentBoard from "../AgentCards/AgentBoard";
import MenuConfiguration from "../Menu/MenuConfiguration";
import NavBarAdmin from "../NavBar/NavBarAdmin";
import NewProduct from "../AdminCards/NewProduct";
import AdminCard from "../AdminCards/AdminCard";
import NewCategory from "../AdminCards/NewCategory";
import AdminCardProvider from "../AdminCards/AdminCardProvider";
import ClientForms from "../ClientCard/ClientForms";
import AdminContextProvider from "../AdminCards/AdminContextProvider";
import ClientProvider from "../ClientCard/ClientProvider";
import ProposalsList from "../AdminCards/Problem&Solutions/ProposalsList";
import AdminSolutionList from "../AdminCards/Problem&Solutions/AdminSolutionList";
import AdminProblemList from "../AdminCards/Problem&Solutions/AdminProblemList";
import NewProblem from "../AdminCards/Problem&Solutions/NewProblem";
import NewSolution from "../AdminCards/Problem&Solutions/NewSolution";
import NewUser from "../AdminCards/User/NewUser";

function AdminConfiguration() {
  return (
    <AdminCardProvider>
      <AdminContextProvider>
        <ClientProvider>
          <NavBarAdmin />
          <div className="agent-container admin">
            <AgentBoard id="board-1" className="board board-menu">
              <AdminCard
                id="card-1"
                draggable="false"
                component={<MenuConfiguration />}
              />
              <AdminCard
                id="card-10"
                draggable="true"
                component={<ClientForms />}
              />
              <AdminCard
                id="card-11"
                draggable="true"
                component={<NewCategory />}
              />
            </AgentBoard>

            <AgentBoard id="board-2" className="board">
              <AdminCard
                id="card-4"
                draggable="true"
                component={<NewProblem />}
              />
              <AdminCard id="card-6" draggable="true" component={<NewUser />} />
              <AdminCard
                id="card-8"
                draggable="true"
                component={<NewProduct />}
              />
            </AgentBoard>

            <AgentBoard id="board-3" className="board">
              <AdminCard
                id="card-5"
                draggable="true"
                component={<AdminProblemList />}
              />
              <AdminCard
                id="card-12"
                draggable="true"
                component={<AdminSolutionList />}
              />
              <AdminCard
                id="card-13"
                draggable="true"
                component={<NewSolution />}
              />
              <AdminCard
                id="card-14"
                draggable="true"
                component={<ProposalsList />}
              />
            </AgentBoard>
          </div>
        </ClientProvider>
      </AdminContextProvider>
    </AdminCardProvider>
  );
}

export default AdminConfiguration;
