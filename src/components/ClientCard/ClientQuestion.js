/* 
  Author: Joan Daniel Guerrero García.

  Last modified date: June 3rd, 2022.
  
  Description: Card displaying a verification question 
  for a not authenticated client.

  Usage: To create a ClientQuestion, you need to import 
  this file and use the following line:

  <ClientQuestion />
*/

import axios from "axios";
import { Fragment, useContext, useState } from "react";
import { ClientContext } from "./ClientProvider";

const ClientQuestion = (props) => {
  const [ , , , setClientFname, , setClientLname, , setClientEmail, clientPhone, , showClient, setShowClient, showError, setShowError] = useContext(ClientContext);

  const [inputEmail, setInputEmail] = useState("");

  const clientEmailHandler = (event) => {
    setInputEmail(event.target.value);
  };

  const getClientData = async () => {
    await axios.post('https://3.80.44.247:8443/vid/getUserData',{
      "phoneNumber": clientPhone
    })
    .then(res => {
      setClientFname(res.data.first_name);
      setClientLname(res.data.last_name);
      setClientEmail(res.data.email);
      if (res.data.email === inputEmail) {    
        sendAuth();
        setShowClient(true);
      } else {
        setShowError(true);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
  };

  const sendAuth = async () => {
    await axios.post("https://3.80.44.247:8443/vid/sendAuthRes", {
      phoneNumber: clientPhone,
      authenticationType: "authenticated"
    });
  }

  return (
    <div className="client">
      {!showClient && (
        <Fragment>
          <h1 className="title"> Authentification question </h1>
          <br />
          <div className="element">
            <label htmlFor={props.elementID}>
              &nbsp;{"Confirm email"}
              &nbsp;{
                <input
                  className="user-ID"
                  type="text"
                  placeholder="example@gmail.com"
                  onChange={clientEmailHandler}
                />
              }
            </label>
          </div>
          {showError && <h1> Authentication failed, please try again </h1>}
          <button className="button" onClick={getClientData}> Submit </button>
        </Fragment>
      )}
      {showClient && (
        <h2 className="subtitle"> Client authenticated </h2>
      )}
    </div>
  );
};

export default ClientQuestion;
