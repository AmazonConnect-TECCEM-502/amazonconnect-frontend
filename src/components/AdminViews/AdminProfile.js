/*
  Author: Maria Fernanda Ramirez Barragan
  Description: Show the Admin information
  when clicked "profile" 

*/

import AgentProvider from "../AgentView/AgentProvider";
import Card from "../AgentCards/Card";
import ProfileCard from "../ManagerCards/ProfileCard";

function AdminProfile() {
  return (
    <AgentProvider>
      <div className="user-profile">
        <Card id="" draggable="" component={<ProfileCard />} />
      </div>
    </AgentProvider>
  );
}

export default AdminProfile;
