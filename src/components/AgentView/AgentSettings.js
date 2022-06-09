/*
  Author: Eric Alexis Castañeda Bravo
  Description: Show the info of the user and allow him to 
  change Name and Last name

  Usage:
  <AgentSettings />
*/

import Card from "../AgentCards/Card";
import AgentProvider from "../AgentView/AgentProvider";
import Settings from "../AgentCards/Setting";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function AgentSettings(props) {
  const navigate = useNavigate();
  const user_type = localStorage.getItem("user_type");

  /* Checking if the user is an agent, if not it will redirect to the previous page. */
  useEffect(() => {
    if(user_type === ""){
      navigate("/");
    }
    else if(user_type !== "agent"){
      navigate(-1);
    }
  }, [user_type, navigate]);

  if (user_type === "agent") {
    return (
      <div>
        <AgentProvider>
          <div className="user-settings">
            <Card id="" draggable="" component={<Settings />} />
          </div>
        </AgentProvider>
      </div>
    );
  } 
}

export default AgentSettings;
