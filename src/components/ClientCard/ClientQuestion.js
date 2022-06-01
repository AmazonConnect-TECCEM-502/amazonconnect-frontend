import axios from "axios";
import { Fragment, useContext, useState } from "react";
import { AgentContext } from "../AgentView/AgentProvider";
import ClientInfo from "./ClientInfo";
import ClientName from "./ClientName";

const ClientQuestion = (props) => {
  const [, , , , , , , , , , clientPhone, , showClient, setShowClient, clientEmail, setClientEmail, ] = useContext(AgentContext);

  const [clientFname, setClientFname] = useState("");
  const [clientLname, setClientLname] = useState("");
  const [showError, setShowError] = useState(false);
  const [inputEmail, setInputEmail] = useState("");

  const clientEmailHandler = (event) => {
    setInputEmail(event.target.value);
  };

  const getClientData = async () => {
    await axios.post('http://3.80.44.247:8080/vid/getUserData',{
      "phoneNumber": clientPhone
    })
    .then(res => {
      setClientFname(res.data.first_name);
      setClientLname(res.data.last_name);
      setClientEmail(res.data.email);
      if (res.data.email === inputEmail) {
        setShowClient(true);
      } else {
        setShowError(true);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
  };

  return (
    <div className="client">
      {!showClient && (
        <Fragment>
          <h1 className="title"> Authentification question </h1>
          <br />
          <div className="element">
            <label htmlFor={props.elementID}>
              &nbsp;{"Please confirm email"}&nbsp;
              {
                <input
                  className="client-input"
                  type="text"
                  placeholder="Client email"
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
        <Fragment>
          <ClientName name={clientFname + ", " + clientLname} />
          <ClientInfo text={clientEmail} />
          <ClientInfo text={clientPhone} />
        </Fragment>
      )}
    </div>
  );
};

export default ClientQuestion;
