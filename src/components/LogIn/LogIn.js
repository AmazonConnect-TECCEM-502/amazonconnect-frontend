import { Fragment} from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="logCard">
        <div className="login">
          <b>UserID</b>
          <input className="user-ID" type="text" name="userID" />
          <b>Password</b>
          <input className="user-ID" type="text" name="password" />
          <p className="forget"> Did you forget your password?</p>
        </div>
        <br/>
        <br/>
        <button className="buttonSignIn" onClick={() => navigate("/agent/home")}>Sign In</button>
      </div>
    </Fragment>
  );
};

export default LogIn;
