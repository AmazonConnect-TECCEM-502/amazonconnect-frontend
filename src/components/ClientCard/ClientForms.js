/* 
  Author: Joan Daniel Guerrero García.

  Last modified date: June 9th, 2022.
  
  Description: Card displaying a forms to register a client 
  not registered in Tecmex database.

  Usage: To create a ClientForms, you need to import this file
  and use the following line:

  <ClientForms />
*/

import axios from "axios";
import { Fragment, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ClientContext } from "./ClientProvider";

const ClientForms = (props) => {
  const [ , , clientFname, setClientFname, clientLname, setClientLname, clientEmail, setClientEmail, clientPhone, , , , , , , , , update] = useContext(ClientContext);

  const [emptyPhone, setEmptyPhone] = useState(false);

  useEffect(() => {
    if (clientPhone === "") {
      setEmptyPhone(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clientFnameHandler = (event) => {
    setClientFname(event.target.value);
  };
  const clientLnameHandler = (event) => {
    setClientLname(event.target.value);
  };
  const clientEmailHandler = (event) => {
    setClientEmail(event.target.value);
  };

  const postNewClient = async () => {
    if(clientFname === "" || clientLname === "" || clientEmail === "")
    {
      toast.error("Please fill out all the fields");
    }
    else if(!clientEmail.includes("@") || !clientEmail.includes("."))
    {
      toast.error("Invalid email format, please include '@' and '.'");
    }
    else
    {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/vid/sendClientData`, {
        first_name: clientFname,
        last_name: clientLname,
        email: clientEmail,
        phone: clientPhone,
      });
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/vid/sendAuthRes`, {
        phoneNumber: clientPhone,
        authenticationType: "authenticated"
      });
      toast.success('Client registered');
      update();
    } 
  };

  return (
    <div className="client">
      <Fragment>
        <h1 className="title"> New user registry </h1>
        <br />
        <div className="element">
          <label htmlFor={props.elementID}>
            &nbsp;{"First name"}&nbsp;
            {
              <input
                className="user-ID"
                type="text"
                onChange={clientFnameHandler}
              />
            }
          </label>
        </div>
        <div className="element">
          <label htmlFor={props.elementID}>
            &nbsp;{"Last name"}&nbsp;
            {
              <input
                className="user-ID"
                type="text"
                onChange={clientLnameHandler}
              />
            }
          </label>
        </div>
        <div className="element">
          <label htmlFor={props.elementID}>
            &nbsp;{"Email"}&nbsp;
            {
              <input
                className="user-ID"
                type="email"
                placeholder="example@gmail.com"
                onChange={clientEmailHandler}
              />
            }
          </label>
        </div>
        <div className="element">
          <label htmlFor={props.elementID}>
            &nbsp;{"Phone number"}
            &nbsp;
            {!emptyPhone && (
              <input
                className="user-ID disabled"
                type="tel"
                placeholder="+52"
                value={clientPhone}
                readOnly
                disabled
              />
            )}
            {emptyPhone && (
              <input
                className="user-ID"
                type="tel"
                placeholder="+52"
              />
            )}
          </label>
        </div>
        <button className="btn-main" onClick={postNewClient}> Register </button>
      </Fragment>
    </div>
  );
};

export default ClientForms;
