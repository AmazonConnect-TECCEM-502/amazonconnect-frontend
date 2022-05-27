import NavBarManager from "../NavBar/NavBarManager";
import CardsProvider from "../AgentCards/CardsProvider";
import Card from "../AgentCards/Card";
import AgentBoard from "../AgentCards/AgentBoard";
import ProfileCard from "../ManagerCards/ProfileCard";

function ManagerProfile() {
  return (
    <CardsProvider>
      <NavBarManager />
      <div
        className="manager-dashboard-container"
        style={{ justifyContent: "space-around" }}
      >
        <AgentBoard id="board-4" className="board board-menu profile-card">
          <Card id="" draggable="false" component={<ProfileCard />} />
        </AgentBoard>
      </div>
    </CardsProvider>
  );
}

export default ManagerProfile;
