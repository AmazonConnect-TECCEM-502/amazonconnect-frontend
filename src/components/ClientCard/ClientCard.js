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
import ClientInfo from "./ClientInfo";
import ClientName from "./ClientName";
import ClientQuestion from "./ClientQuestion";

const ClientCard = () => {
  const [, , , , , setClientID, , , , , clientPhone, , , setShowClient, clientEmail, setClientEmail] = useContext(AgentContext);

  const [clientFname, setClientFname] = useState("");
  const [clientLname, setClientLname] = useState("");
  const [result, setResult] = useState(""); // AuthenticationType

  console.log(clientPhone + "..................");

  useEffect( () => {
    update();
  }, []);

  const update = async () => {
    console.log("Sacando valores..................")
    await axios.post('http://3.80.44.247:8080/vid/getAuthRes',{
      "phoneNumber": clientPhone
    })
    .then(res => {
      console.log(res.data.authenticationType)
      showContent(res.data.authenticationType)
    })
    .catch(function(err) {
      console.log(err);
      showContent("not yet");
    });
  }

  const showContent = (message) => {
    if(message === "authenticated"){
      getClientData();
    }
    setResult(message);
    console.log(result);
  };

  const getClientData = async () => {
    await axios.post('http://3.80.44.247:8080/vid/getUserData',{
      "phoneNumber": clientPhone
    })
    .then(res => {
      setClientID(res.data.client_id)
      setClientFname(res.data.first_name)
      setClientLname(res.data.last_name)
      setClientEmail(res.data.email)
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
      "phoneNumber": clientPhone
    })
  };

  return (
    <div className="client">
      {
        //Show User Info
        (result === "authenticated") &&
        <Fragment>
          <ClientName name={clientFname + ", " + clientLname} />
          <ClientInfo text={clientEmail} />
          <ClientInfo text={clientPhone} />
        </Fragment>
      }
      {
        //Show Message error and form 
        (result === "not enrolled") &&  <ClientForms />
      }
      {
        //Show verification question 
        (result === "not authenticated" || result === "inconclusive" || result === "opted out") && 
        <ClientQuestion />
      }
      {
        //Show no data error
        (result !== "authenticated") && (result !== "opted out") && (result !== "not enrolled") && (result !== "inconclusive")
        && (result !== "not authenticated") && <h1 className="title"> Data not recieved yet </h1>
      }
      <button className="button-reset refresh" onClick={() => update()}> Refresh </button>
      <button className="button-reset" onClick={() => resetUserData()}> Reset values </button>
    </div>
  );
};

export default ClientCard;
