import Card from "../AgentCards/Card";
import AgentProvider from "../AgentView/AgentProvider";
import Settings from "../AgentCards/Setting";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function AdminSettings(props) {
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

  if(user_type === "admin"){
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

export default AdminSettings;
