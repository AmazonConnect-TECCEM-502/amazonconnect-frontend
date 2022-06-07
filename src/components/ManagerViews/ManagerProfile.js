/*
  Author: Maria Fernanda Ramirez Barragan
  Description: Show the Manager information
  when clicked "profile" 

*/

import AgentProvider from "../AgentView/AgentProvider";
import Card from "../AgentCards/Card";
import ProfileCard from "../ManagerCards/ProfileCard";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function ManagerProfile() {
  const user_type = localStorage.getItem("user_type");
  const navigate = useNavigate();

  /* Checking if the user is an manager, if not it will redirect to the previous page. */
  useEffect(() => {
    if(user_type === ""){
      navigate("/");
    }
    else if(user_type !== "manager"){
      navigate(-1);
    }
  }, [user_type, navigate]);

  if (user_type === "manager"){
    return (
      <AgentProvider>
        <div className="user-profile">
          <Card id="" draggable="false" component={<ProfileCard />} />
        </div>
      </AgentProvider>
    );
  }
}
export default ManagerProfile;
