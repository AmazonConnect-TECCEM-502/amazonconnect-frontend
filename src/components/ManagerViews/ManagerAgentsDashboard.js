/*
  Author: Maria Fernanda Ramirez Barragan, Octavio Andrick Sánchez Perusquia
  Description: It displays each agent in the database
  and show them to the manager in order to get each agent 
  dashboards
*/

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
  
function ManagerAgentsDashboard() {
  const [name, setName] = useState("");
  const user_id = localStorage.getItem("user_id");
  const navigate = useNavigate();
  const user_type = localStorage.getItem("user_type");
  const token = localStorage.getItem("token");
  const header = new Headers({ Authorization: token });

  /* Checking if the user is an manager, if not it will redirect to the previous page. */
  useEffect(() => {
    fetch("http://localhost:8080/user/readUser", {
      method: "GET",
      headers: header,
    })
      .then((response) => response.json())
      .then((result) => {
        setName(() => result.first_name);
      });

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
        <div className="manager-container">
          <h1>Welcome home, {name}</h1>
        </div>
        <iframe
          height="900"
          width="1200"
          src={"https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/559202700801/dashboards/c5a9e5b8-1d67-4e0c-9785-d58175d18898?directory_alias=amazonconnectbancos#p.manager="+user_id}
        ></iframe>
      </div>
    );
  }
}

export default ManagerAgentsDashboard;
