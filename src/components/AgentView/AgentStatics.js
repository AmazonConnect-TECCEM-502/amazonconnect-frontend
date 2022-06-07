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
        <iframe
          width="1200"
          height="900"
          title="Agent"
          src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/559202700801/dashboards/c2baec29-5368-4e6f-be83-fffa16bb7702?directory_alias=amazonconnectbancos#p.agent=7"
        ></iframe>
      </div>
    );
  }
}

export default AgentStatics;
