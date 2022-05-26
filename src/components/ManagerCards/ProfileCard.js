/*
  Author: Maria Fernanda Ramirez Barragan
  Description: Show the manager information
  when clicked "profile" 

  Usage:
  <ProfileCard />
*/

import { Fragment } from "react";

const ProfileCard = () => {
  return (
    <Fragment>
      <div className="profile-info">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580"
            alt="Profile Photo"
          />
        </div>
        <div className="person-info">
          <p className="agent-title" style={{ marginBottom: "3px" }}>
            {" "}
            Agent Name
          </p>
          <p style={{ color: "blue", marginTop: "0px" }}> Agent Role</p>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="personal-data">
              <p> Phone: </p>
              <p> Email: </p>
              <p> ID: </p>
            </div>
            <div className="personal-data">
              <p> Birthday: </p>
              <p> Gender: </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileCard;
