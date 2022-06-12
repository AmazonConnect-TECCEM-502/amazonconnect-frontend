/*
  Author:
  Description: Show the statistics of the agent

  Usage:
  <AgentStatics />
*/

import { useEffect } from "react";
import { useNavigate } from "react-router";
  
function AgentStatics() {
  const navigate = useNavigate()
  const user_type = localStorage.getItem("user_type");
  const user_id = localStorage.getItem("user_id");

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
    return(
      <div>
        <iframe
            width="1200"
            height="900"
            src={process.env.REACT_APP_AGENT_QUICKSIGHT_URL + user_id}>
        </iframe>
      </div>
    );
  }
}

export default AgentStatics;
