import axios from "axios";
import { useState } from "react";

const UserForms = (props) => {
    const [userFname, setUserFname] = useState("");
    const [userLname, setUserLname] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userAnswer, setUserAnswer] = useState("");


    const userFnameHandler = (event) => {
        setUserFname(event.target.value);
    }
    const userLnameHandler = (event) => {
        setUserLname(event.target.value);
    }
    const userEmailHandler = (event) => {
        setUserEmail(event.target.value);
    }
    const userPhoneHandler = (event) => {
        setUserPhone(event.target.value);
    }
    const userAnswerHandler = (event) => {
        setUserAnswer(event.target.value);
    }

    const postNewUser = async () => {
        await axios.post('http://187.208.199.168:80/voiceid/sendClientData',{
        "fname": userFname,
        "lname": userLname,
        "email": userEmail,
        "phone": userPhone,
        "question": "Where were your last vacations?",
        "response": userAnswer
        })
    }

    return (
        <div className="user">
            <h1 className="title"> New user registry </h1><br/>
            <div className="element">
                <label htmlFor={props.elementID}>
                    &nbsp;{"First name"}&nbsp;{<input className="user-input"
                    type = "text"
                    placeholder = "User first name"
                    onChange={userFnameHandler}/>}
                </label>
            </div>
            <div className="element">
                <label htmlFor={props.elementID}>
                    &nbsp;{"Last name"}&nbsp;{<input className="user-input"
                    type = "text"
                    placeholder = "User last name"
                    onChange={userLnameHandler}/>}
                </label>
            </div>
            <div className="element">
                <label htmlFor={props.elementID}>
                    &nbsp;{"Email"}&nbsp;{<input className="user-input"
                    type = "email"
                    placeholder = "example@gmail.com"
                    onChange={userEmailHandler}/>}
                </label>
            </div>
            <div className="element">
                <label htmlFor={props.elementID}>
                    &nbsp;{"Phone number"}&nbsp;{<input className="user-input"
                    type = "tel"
                    placeholder = "+52"
                    onChange={userPhoneHandler}/>}
                </label>
            </div>
            <div className="element">
                <label htmlFor={props.elementID}>
                    &nbsp;{"Where were your last vacations?"}&nbsp;{<input className="user-input"
                    type = "text"
                    placeholder = "User answer"
                    onChange={userAnswerHandler}/>}
                </label>
            </div>
            <button className="button" onClick={() => postNewUser()}> Register </button>
        </div>
    );
};

export default UserForms;