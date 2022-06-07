/*
  Author: Maria Fernanda Ramirez Barragan
  Description: Show the Admin information
  when clicked "profile" 

*/

import AgentProvider from "../AgentView/AgentProvider";
import Card from "../AgentCards/Card";
import ProfileCard from "../ManagerCards/ProfileCard";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function AdminProfile() {
  const user_type = localStorage.getItem("user_type");
  const navigate = useNavigate();

  /* Checking if the user is an admin, if not it will redirect to the previous page. */
  useEffect(() => {
    if(user_type === ""){
      navigate("/");
    }
    else if(user_type !== "admin"){
      navigate(-1);
    }
  }, [user_type, navigate]);

  if (user_type === "admin"){
    return (
      <AgentProvider>
        <div className="user-profile">
          <Card id="" draggable="" component={<ProfileCard />} />
        </div>
      </AgentProvider>
    );
  }
}

export default AdminProfile;
