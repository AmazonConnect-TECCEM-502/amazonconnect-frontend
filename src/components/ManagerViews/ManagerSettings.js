import Card from "../AgentCards/Card";
import AgentProvider from "../AgentView/AgentProvider";
import Settings from "../AgentCards/Setting";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function ManagerSettings(props) {
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

  if(user_type === "manager"){
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

export default ManagerSettings;
