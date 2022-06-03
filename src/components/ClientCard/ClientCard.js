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
import ClientForms from "./ClientForms";
import ClientInfo from "./ClientInfo";
import ClientName from "./ClientName";
import ClientQuestion from "./ClientQuestion";
import { ClientContext } from "./ClientProvider";

const ClientCard = () => {
  const [ , setClientID, clientFname, setClientFname, clientLname, setClientLname, clientEmail, setClientEmail, clientPhone, , , setShowClient, , setShowError] = useContext(ClientContext);

  const [result, setResult] = useState(""); // AuthenticationType

  const [products, setProducts] = useState([]);


  useEffect( () => {
    update();
  }, []);

  const update = async () => {
    await axios.post('https://3.80.44.247:8443/vid/getAuthRes',{
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
    await axios.post('https://3.80.44.247:8443/vid/getUserData',{
      "phoneNumber": clientPhone
    })
    .then(res => {
      setClientID(res.data.userData.client_id)
      setClientFname(res.data.userData.first_name)
      setClientLname(res.data.userData.last_name)
      setClientEmail(res.data.userData.email)
      setProducts(res.data.userProducts)
    })
    .catch(function(err) {
      console.log(err);
      showContent("not yet");
    });
  }

  const resetUserData = async () => {
    showContent("not yet");
    setShowClient(false);
    setShowError(false);
    await axios.post('https://3.80.44.247:8443/vid/reset',{
      "phoneNumber": clientPhone
    })
  };
  
  /*              DEBUG BUTTONS (Must be under line 94)
  <button onClick={() => showContent("authenticated")}> Card </button>
  <button onClick={() => showContent("not enrolled")}> Forms </button>
  <button onClick={() => showContent("not authenticated")}> Question </button>
  */

  return (
    <div className="client">
      {
        //Show User Info
        (result === "authenticated") &&
        <Fragment>
          <ClientName name={clientFname + ", " + clientLname} />
          <ClientInfo text={clientEmail} />
          <ClientInfo text={clientPhone} />
          <h2>Products</h2>
          <div className="element">
            {
              products.map((product) => (
                <p>{product.product_name}</p>
              ))
            }
          </div>
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
