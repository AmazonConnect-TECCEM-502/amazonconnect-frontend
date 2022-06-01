/* 
  Author: Joan Daniel Guerrero García.

  Last modified date: May 25th, 2022.
  
  Description: Card displaying a client's main information.
  (image, full name, and any other additional info given)

  Usage: To create a ClientCard, you need to import this file
  and use the following line:

  <ClientCard 
    image = {name of the .jpg image} 
    fname = {first name}
    lname = {last name}
    email = {email}
    phone = {phone number} 
  />
*/

import axios from "axios";
import { Fragment, useContext, useEffect, useState } from "react";
import { AgentContext } from "../AgentView/AgentProvider";
import ClientForms from "./ClientForms";
import ClientImage from "./ClientImage";
import ClientInfo from "./ClientInfo";
import ClientName from "./ClientName";
import ClientQuestion from "./ClientQuestion";

const ClientCard = (props) => {
  const [, , , , , setClientID, , , , , clientPhone, setClientPhone, , setShowClient] = useContext(AgentContext);

  const [lastNameClient, setLastNameClient] = useState("");
  const [emailClient, setEmailClient] = useState("");
  const [nameClient, setNameClient] = useState("");
  const [result, setResult] = useState("");

  const update = async () => {
    console.log("Sacando valores ?? ...")
    fetch('http://3.80.44.247:8080/vid/getAuthRes')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setClientPhone(data.phoneNumber)
      showContent(data.authenticationType)
    })
    .catch(function(err) {
      console.log(err);
      showContent("not yet");
    });
  }

  useEffect( () => {
    update();
  });

  const showContent = (message) => {
    if(message === "authenticated"){
      getClientData();
    }
    setResult(message);
    console.log(result);
  };

  const getClientData = async () => {
    await fetch('http://3.80.44.247:8080/vid/getUserData')
    .then(response => response.json())
    .then(data => {
      setClientID(data.client_id)
      setNameClient(data.first_name)
      setLastNameClient(data.last_name)
      setEmailClient(data.email)
    })
    .catch(function(err) {
      console.log(err);
      showContent("not yet");
    });
  }

  const resetUserData = async () => {
    showContent("not yet");
    setShowClient(false);
    await axios.post('http://3.80.44.247:8080/vid/reset',{
      "message": "not yet"
    })
  };

  return (
    <div className="client">
      {
        //Show User Info
        (result === "authenticated") &&
        <Fragment>
          <ClientImage image={props.image} />
          <ClientName name={nameClient + ", " + lastNameClient} />
          <ClientInfo text={emailClient} />
          <ClientInfo text={clientPhone} />
        </Fragment>
      }
      {
        //Show Message error and form 
        (result === "not enrolled" || result === "opted out") &&  <ClientForms />
      }
      {
        //Show verification question 
        (result === "not authenticated" || result === "inconclusive") && 
        <ClientQuestion />
      }
      {
        //Show no data error
        (result !== "authenticated") && (result !== "opted out") && (result !== "not enrolled") && (result !== "inconclusive")
        && (result !== "not authenticated") && <h1 className="title"> Data not recieved yet </h1>
      }
      <button className="button-reset" onClick={() => resetUserData()}> Reset values </button>
      <button className="button-reset" onClick={() => update()}> Refresh </button>
    </div>
  );
};

export default ClientCard;
