/*
  Author: Maria Fernanda Ramirez Barragan
  Description: Gets the agent name and gives 
  an specific style

  Usage:
  <Agent />
*/

import { Fragment, useEffect, useState } from "react";

const Agent = () => {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const agentsData = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/readAgents`);
      const jsonAgents = await agentsData.json();

      setAgents(jsonAgents);
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      {agents.map((agent) => {
        return (
          <div className="agent-info">
            <p className="agent-name">
              {" "}
              {agent.first_name} {agent.last_name}
            </p>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Agent;
