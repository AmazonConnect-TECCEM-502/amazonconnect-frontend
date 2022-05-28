import { Fragment, useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import UserInfo from "./UserInfo";


const Settings = () => {
        const [userId, setUserId] = useState("");
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [email, setEmail] = useState("");
        const [userType, setUserType] = useState("");

        const getClientData = async () => {
            const json = {user_id : 14};
            console.log(JSON.stringify(json));
            await fetch('http://localhost:8080/suc/userData',{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(json)
            })
            .then(response => response.json())
            .then(data => {
            setUserId(data.user_id)
            setFirstName(data.first_name)
            setLastName(data.last_name)
            setEmail(data.email)
            setUserType(data.user_type)
        })
        .catch(function(err) {
          console.log(err);
        });
      }
      useEffect( () => {
        getClientData();
      });
      
    const navigate = useNavigate();
      // Contenido del input
  const [nuevoFirstName, setNuevoFirstName] = useState("")
  const [nuevoLastName, setNuevoLastName] = useState("")
  // Atender el evento de cambio en el input
  const cambioFirstName = (event) => {
        setNuevoFirstName(event.target.value); 
  };
  const cambioLastName = (event) => {

    setNuevoLastName(event.target.value);

  };
    const sendNewName = async () => {

        await axios.post('http://localhost:8080/suc/changeName',{
            "user_id": 14, //Modificar No siempre tiene que ser 14
            "first_name": nuevoFirstName,
            "last_name": nuevoLastName
        })
    
      };

      const callFunctions = () => {
        sendNewName();
        navigate("/agent/profile");
      };
  return (
    <Fragment>
      <div className="profile-info">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://experiencia21.tec.mx/users/221/files/4808076/preview?verifier=trAIuyGaUvXXaoLmpScp3A2GU9IkVMiBCpu6HNOc"
            alt="Profile"
          />
        </div>
        <div className="person-info">
          <p className="agent-title" style={{ marginBottom: "3px" }}>
            <UserInfo text={firstName + " " + lastName} />
          </p>
          <p style={{ color: "blue", marginTop: "0px" }}> {userType} </p>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="personal-data">
              <p> First_Name: </p>
              <div>
                <input className="user-name-changed" type="text" name="First Name" onChange={cambioFirstName} />
              </div>
                  {/*<input type="text" name="nombre">Dame tu nombre</input>*/}
              <div>
                  <p>Email: {email} </p>
              <p> </p>
              </div> 
              <div> 
              <p> ID: {userId}</p>
              
              </div> 
            </div>
            <div className="personal-data">
              <p> Last Name:</p>
              <div>
                <input className="user-name-changed" type="text" name="Last Name" onChange={cambioLastName} />
              </div>
              <p> Gender: Male</p>
            </div>
          </div>
          <button className="button-send-data" onClick={callFunctions}  > Actualizar </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Settings;