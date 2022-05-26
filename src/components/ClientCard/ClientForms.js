import axios from "axios";
import { useState } from "react";

const ClientForms = (props) => {
    const [clientFname, setClientFname] = useState("");
    const [clientLname, setClientLname] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientPhone, setClientPhone] = useState("");
    const [clientAnswer, setClientAnswer] = useState("");


    const clientFnameHandler = (event) => {
        setClientFname(event.target.value);
    }
    const clientLnameHandler = (event) => {
        setClientLname(event.target.value);
    }
    const clientEmailHandler = (event) => {
        setClientEmail(event.target.value);
    }
    const clientPhoneHandler = (event) => {
        setClientPhone(event.target.value);
    }
    const clientAnswerHandler = (event) => {
        setClientAnswer(event.target.value);
    }

    const postNewClient = async () => {
        await axios.post('https://3.80.44.247:8080/vid/sendClientData',{
        "first_name": clientFname,
        "last_name": clientLname,
        "email": clientEmail,
        "phone": clientPhone
        // Future features
        // "question": "Where were your last vacations?",
        // "response": clientAnswer
        })
    }

    return (
        <div className="client">
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
                    &nbsp;{"Phone number"}&nbsp;{<input className="client-input"
                    type = "tel"
                    placeholder = "+52"
                    onChange={clientPhoneHandler}/>}
                </label>
            </div>
            <div className="element">
                <label htmlFor={props.elementID}>
                    &nbsp;{"Where were your last vacations?"}&nbsp;{<input className="client-input"
                    type = "text"
                    placeholder = "Client answer"
                    onChange={clientAnswerHandler}/>}
                </label>
            </div>
            <button className="button" onClick={() => postNewClient()}> Register </button>
        </div>
    );
};

export default ClientForms;