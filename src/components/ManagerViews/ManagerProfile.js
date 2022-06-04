/*
  Author: Maria Fernanda Ramirez Barragan
  Description: Show the Manager information
  when clicked "profile" 

*/

import AgentProvider from "../AgentView/AgentProvider";
import Card from "../AgentCards/Card";
import ProfileCard from "../ManagerCards/ProfileCard";

function ManagerProfile() {
  return (
    <AgentProvider>
      <div className="user-profile">
        <Card id="" draggable="false" component={<ProfileCard />} />
      </div>
    </AgentProvider>
  );
}

export default ManagerProfile;
