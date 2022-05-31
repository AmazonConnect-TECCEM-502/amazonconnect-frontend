import NavBar from "../NavBar/NavBar";
import CardsProvider from "../AgentCards/CardsProvider";
import Card from "../AgentCards/Card";
import AgentBoard from "../AgentCards/AgentBoard";
import ProfileCard from "../ManagerCards/ProfileCard";

function AgentProfile() {
  return (
    <CardsProvider>
      <NavBar />
      <div className="user-profile">
        <Card id="" draggable="" component={<ProfileCard />} />
      </div>
    </CardsProvider>
  );
}

export default AgentProfile;
