import NavBarManager from "../NavBar/NavBarManager";
import CardsProvider from "../AgentCards/CardsProvider";
import Card from "../AgentCards/Card";
import AgentBoard from "../AgentCards/AgentBoard";
import ProfileCard from "../ManagerCards/ProfileCard";

function ManagerProfile() {
  return (
    <CardsProvider>
      <NavBarManager />
      <div className="user-profile">
        <Card id="" draggable="false" component={<ProfileCard />} />
      </div>
    </CardsProvider>
  );
}

export default ManagerProfile;
