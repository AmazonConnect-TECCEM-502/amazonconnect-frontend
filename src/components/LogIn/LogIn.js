import { Fragment } from "react";
import "../../style/LogIn/LogIn.css"

const LogIn = ()=>{

    return(
        <Fragment>
            <div className="logCard">
                <div className="login">
                    <b>UserID</b>
                    <input className="user-ID" type="text" name="userID"/>
                    <b>Password</b>
                    <input className="user-ID" type="text" name="password"/>
                    <p className="forget"> Did you forget your password?</p>
                </div>
                <br></br>
                <br></br>
                <button className="buttonSignIn" >Sign In</button>
            </div>
        </Fragment>
    )
}

export default LogIn;