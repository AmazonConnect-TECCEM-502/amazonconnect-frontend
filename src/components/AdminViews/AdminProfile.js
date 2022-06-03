/*
  Author: Maria Fernanda Ramirez Barragan
  Description: Show the Admin information
  when clicked "profile" 

*/

import NavBarAdmin from "../NavBar/NavBarAdmin";
import AgentProvider from "../AgentView/AgentProvider";
import Card from "../AgentCards/Card";
import ProfileCard from "../ManagerCards/ProfileCard";

function AdminProfile() {
  return (
    <AgentProvider>
      <NavBarAdmin />
      <div className="user-profile">
        <Card id="" draggable="" component={<ProfileCard />} />
      </div>
    </AgentProvider>
  );
}

export default AdminProfile;
