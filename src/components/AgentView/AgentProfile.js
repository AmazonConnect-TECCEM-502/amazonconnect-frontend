import NavBar from "../NavBar/NavBar";
import AgentProvider from "../AgentView/AgentProvider";
import Card from "../AgentCards/Card";
import ProfileCard from "../ManagerCards/ProfileCard";

function AgentProfile() {
  return (
    <AgentProvider>
      <NavBar />
      <div className="user-profile">
        <Card id="" draggable="" component={<ProfileCard />} />
      </div>
    </AgentProvider>
  );
}

export default AgentProfile;
