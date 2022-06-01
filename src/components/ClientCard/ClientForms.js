import axios from "axios";
import { Fragment, useContext, useEffect, useState } from "react";
import { AgentContext } from "../AgentView/AgentProvider";
import ClientInfo from "./ClientInfo";
import ClientName from "./ClientName";

const ClientForms = (props) => {
    const [, , , , , , , , , , clientPhone, , showClient, setShowClient, clientEmail, setClientEmail] = useContext(AgentContext);
    
    const [clientFname, setClientFname] = useState("");
    const [clientLname, setClientLname] = useState("");
    const [emptyPhone, setEmptyPhone] = useState(false);

    console.log(clientPhone + "..................");

    useEffect( () => {
        if(clientPhone === "")
        {
            setEmptyPhone(true);
        }
      }, []);
    
    const clientFnameHandler = (event) => {
        setClientFname(event.target.value);
    }
    const clientLnameHandler = (event) => {
        setClientLname(event.target.value);
    }
    const clientEmailHandler = (event) => {
        setClientEmail(event.target.value);
    }

    const postNewClient = async () => {
        await axios.post('http://3.80.44.247:8080/vid/sendClientData',{
        "first_name": clientFname,
        "last_name": clientLname,
        "email": clientEmail,
        "phone": clientPhone
        })
        setShowClient(true);   
    }
    
    return (
        <div className="client">
            {
                (!showClient) &&
                <Fragment>
                    <h1 className="title"> New user registry </h1><br/>
                    <div className="element">
                        <label htmlFor={props.elementID}>
                            &nbsp;{"First name"}&nbsp;{<input className="client-input"
                            type = "text"
                            placeholder = "Client first name"
                            onChange={clientFnameHandler}/>}
                        </label>
                    </div>
                    <div className="element">
                        <label htmlFor={props.elementID}>
                            &nbsp;{"Last name"}&nbsp;{<input className="client-input"
                            type = "text"
                            placeholder = "Client last name"
                            onChange={clientLnameHandler}/>}
                        </label>
                    </div>
                    <div className="element">
                        <label htmlFor={props.elementID}>
                            &nbsp;{"Email"}&nbsp;{<input className="client-input"
                            type = "email"
                            placeholder = "example@gmail.com"
                            onChange={clientEmailHandler}/>}
                        </label>
                    </div>
                    <div className="element">
                        <label htmlFor={props.elementID}>
                            &nbsp;{"Phone number"}
                            &nbsp;
                            { !emptyPhone &&
                            <input className="client-input"
                            type = "tel"
                            placeholder = "+52"
                            value = {clientPhone}
                            disabled
                            />
                            }
                            { emptyPhone &&
                            <input className="client-input"
                            type = "tel"
                            placeholder = "+52"
                            value = {clientPhone}
                            />
                            }
                        </label>
                    </div>
                    <button className="button" onClick={() => postNewClient()}> Register </button>
                </Fragment>
            }
            {
                (showClient) &&
                <Fragment>
                    <ClientName name={clientFname + ", " + clientLname} />
                    <ClientInfo text={clientEmail} />
                    <ClientInfo text={clientPhone} />
                </Fragment>
            }
        </div>
    );
};

export default ClientForms;