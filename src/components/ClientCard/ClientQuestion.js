import { Fragment, useContext, useState } from "react";
import { CardContext } from "../AgentCards/CardsProvider";
import ClientInfo from "./ClientInfo";
import ClientName from "./ClientName";

const ClientQuestion = (props) => {
    const [, , , , , , , , , , clientPhone, , showClient, setShowClient] = useContext(CardContext);

    const [lastNameClient, setLastNameClient] = useState("");
    const [emailClient, setEmailClient] = useState("");
    const [nameClient, setNameClient] = useState("");
    const [showError, setShowError] = useState(false);

    const clientEmailHandler = (event) => {
        setEmailClient(event.target.value);
    }

    const getClientData = async () => {
        // fetch('http://3.80.44.247:8080/vid/getUserData?phone=' + phoneClient)
        await fetch('http://3.80.44.247:8080/vid/getUserData')
        .then(response => response.json())
        .then(data => {
            setNameClient(data.first_name)
            setLastNameClient(data.last_name)
            setEmailClient(data.email)
            if (data.email === emailClient){
                setShowClient(true);
            } else {
                setShowError(true);
            }
        })
        .catch(function(err) {
          console.log(err);
        });
      }

    return (
        <div className="client">
            {
                !showClient &&
                <Fragment>
                    {
                        showError && 
                        <h1> Authentication failed, please try again </h1>
                    }
                    <h1 className="title"> Authentification question </h1><br/>
                    <div className="element">
                        <label htmlFor={props.elementID}>
                            &nbsp;{"Please confirm email"}&nbsp;{<input className="client-input"
                            type = "text"
                            placeholder = "Client email"
                            onChange={clientEmailHandler}/>}
                        </label>
                    </div>
                    <button className="button" onClick={getClientData}> Submit </button>
                </Fragment>
            }
            {
                (showClient) &&
                <Fragment>
                    <ClientName name={nameClient + ", " + lastNameClient} />
                    <ClientInfo text={emailClient} />
                    <ClientInfo text={clientPhone} />
                </Fragment>
            }
        </div>
    );
};

export default ClientQuestion;