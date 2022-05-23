import { useState } from "react";

const UserQuestion = (props) => {
    const [userAnswer, setUserAnswer] = useState("");

    const userAnswerHandler = (event) => {
        setUserAnswer(event.target.value);
    }

    return (
        <div className="user-form">
            <h1 className="title"> Authentification question </h1><br/>
            <div className="element">
                <label htmlFor={props.elementID}>
                    &nbsp;{"Where were your last vacations?"}&nbsp;{<input className="user-input"
                    type = "text"
                    placeholder = "User answer"
                    onChange={userAnswerHandler}/>}
                </label>
            </div>
            <button className="button"> Submit </button>
        </div>
    );
};

export default UserQuestion;