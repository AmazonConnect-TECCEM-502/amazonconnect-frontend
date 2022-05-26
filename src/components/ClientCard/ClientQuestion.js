import { useState } from "react";

const ClientQuestion = (props) => {
    const [clientAnswer, setClientAnswer] = useState("");

    const clientAnswerHandler = (event) => {
        setClientAnswer(event.target.value);
    }

    return (
        <div className="client">
            <h1 className="title"> Authentification question </h1><br/>
            <div className="element">
                <label htmlFor={props.elementID}>
                    &nbsp;{"Where were your last vacations?"}&nbsp;{<input className="client-input"
                    type = "text"
                    placeholder = "Client answer"
                    onChange={clientAnswerHandler}/>}
                </label>
            </div>
            <button className="button"> Submit </button>
        </div>
    );
};

export default ClientQuestion;