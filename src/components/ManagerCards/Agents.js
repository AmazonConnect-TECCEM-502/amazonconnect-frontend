/*
  Author: Maria Fernanda Ramirez Barragan
  Description: It displays each agent in the database
  and show them to the manager

  Usage:
  <Agents />
*/

import { Fragment } from "react";
import Agent from "../ManagerCards/Agent";

const Agents = () => {
  return (
    <Fragment>
      <p className="agent-title"> Agents </p>
      <div>
        <Agent />
      </div>
    </Fragment>
  );
};

export default Agents;
