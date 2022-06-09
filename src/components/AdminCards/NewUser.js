/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: Component that show the card to add a new user.
*/
import { Fragment, useState } from "react";
import toast from "react-hot-toast";

const NewUser = (props) => {
  const [type, setType] = useState("agent");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [managers, setmanagers] = useState([]);
  const [password, setpassword] = useState("");
  const [manager, setmanager] = useState("null")

  const changeType = (event) => {
    setType(event.target.value);
  };
  const changefirstname = (event) => {
    setfirstname(event.target.value);
  };
  const changelastname = (event) => {
    setlastname(event.target.value);
  };
  const changeemail = (event) => {
    setemail(event.target.value);
  };
  const changemanager = (event) => {
    console.log(event.target.value);
    setmanager(event.target.value);
  };
  const changepassword = (event) => {
    setpassword(event.target.value);
  };

  const Managers = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/problem/getManagers`)
    const json = await response.json()
    setmanagers(json)
  };

  const SignUp = async () => {
    console.log(firstname, lastname, email, password, manager);
    if ((firstname && lastname && email && type && password) !== "") {
      if (type === "agent") {
        const request_options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: firstname.toString(),
            last_name: lastname.toString(),
            email: email.toString(),
            user_type: type.toString(),
            manager_id: manager.toString(),
            password: password.toString(),
          }),
        };
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/signup`, request_options)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
        });
      } else {
        const request_options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: firstname.toString(),
            last_name: lastname.toString(),
            email: email.toString(),
            user_type: type.toString(),
            password: password.toString(),
          }),
        };
        toast.success("New User created");
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/signup`, request_options)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
        });
      }
      const card = document.getElementById("card-6");
      card.style.display = "none";
    } else {
      toast.error("All fields must be filled");
    }
  };

  return (
    <Fragment>
      <div className="title"> Create User </div>
      <div className="new">
        <p>Type: </p>
        <select
          className="user-ID"
          type="select"
          name="Answer"
          onChange={changeType}
        >
          <option>agent</option>
          <option>manager</option>
          <option>admin</option>
        </select>
        <p>First Name: </p>
        <input
          className="user-ID"
          type="text"
          name="Answer"
          onChange={changefirstname}
        />
        <p>Last Name: </p>
        <input
          className="user-ID"
          type="text"
          name="Answer"
          onChange={changelastname}
        />
        <p>Email: </p>
        <input
          className="user-ID"
          type="text"
          name="Answer"
          onChange={changeemail}
        />
        <p>Password: </p>
        <input
          className="user-ID"
          type="text"
          name="Answer"
          onChange={changepassword}
        />
        {type === "agent" && (
          <Fragment>
            <p>Manager: </p>
            <select onChange={changemanager} onClick={Managers} className="user-ID">
              <option></option>
              {managers.map((manager) => (
                <option value={manager.user_id}>
                  {manager.first_name}{manager.last_name}
                </option>
              ))}
            </select>
          </Fragment>
        )}
        <br />
        <button className="btn-main" onClick={SignUp}>
          {" "}
          Submit{" "}
        </button>
      </div>
    </Fragment>
  );
};

export default NewUser;
