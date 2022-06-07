/*
  Author: Maria Fernanda Ramirez Barragan
  Description: It displays each agent in the database
  and show them to the manager in order to get each agent 
  dashboards
*/
import { useEffect } from "react";
import { useNavigate } from "react-router";

function ManagerAgentsDashboard() {
  const navigate = useNavigate();
  const user_type = localStorage.getItem("user_type");

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
      <div>
        <iframe
          height="900"
          width="1200"
          title="Overview"
          src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/559202700801/dashboards/c5a9e5b8-1d67-4e0c-9785-d58175d18898?directory_alias=amazonconnectbancos#p.manager=1"
        ></iframe>
      </div>
    );
  }
}

export default ManagerAgentsDashboard;
