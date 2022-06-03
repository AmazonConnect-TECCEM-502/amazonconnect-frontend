/*
  Author: Maria Fernanda Ramirez Barragan
  Description: Show the Manager information
  when clicked "profile" 

*/

import NavBarManager from "../NavBar/NavBarManager";
import AgentProvider from "../AgentView/AgentProvider";
import Card from "../AgentCards/Card";
import AgentBoard from "../AgentCards/AgentBoard";
import ProfileCard from "../ManagerCards/ProfileCard";

function ManagerProfile() {
  return (
    <AgentProvider>
      <NavBarManager />
      <div className="user-profile">
        <Card id="" draggable="false" component={<ProfileCard />} />
      </div>
    </AgentProvider>
  );
}

export default ManagerProfile;
