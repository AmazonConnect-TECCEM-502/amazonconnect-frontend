/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: Component that show the card to add a new solution.

*/
import { Fragment, useContext, useState } from "react";
import { CgCloseR } from "react-icons/cg";
import toast from "react-hot-toast";
import { AdminContext } from "../AdminContextProvider";

const NewSolution = (props) => {
  const [, , preg_id, ,] = useContext(AdminContext);
  const [descriptionSol, setDescriptionSol] = useState("");
  const user_id = localStorage.getItem("user_id");

  const changeDescription = (event) => {
    //Listen to change on "Description" input
    setDescriptionSol(event.target.value);
  };

  const close = () => {
    //Close new solution card
    const card2 = document.getElementById("card-13");
    card2.style.display = "none";
    const card = document.getElementById("card-12");
    card.style.display = "none";
  };

  const CreateSolution = async () => {
    const newdate = new Date(); // Todays date
    const date =
      newdate.getFullYear() + "-" + newdate.getMonth() + "-" + newdate.getDay();

    const request_options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        solution_description: descriptionSol.toString(),
        approved_date: date,
        problem_id: preg_id,
        submitted_id: user_id.toString(),
        approved_by: user_id.toString(),
      }),
    };

    if (descriptionSol.toString() !== "") {
      await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/problem/postCreateSolution`,
        request_options
      );

      toast.success("New Solution created");
    } else {
      toast.error("All fields must be filled");
    }
  };

  return (
    <Fragment>
      <CgCloseR
        className="icon-buttons closebutton"
        onClick={close}
        size={20}
      ></CgCloseR>
      <div className="title">
        <p>Create Solutions</p>
      </div>
      <div className="new">
        <p>Description: </p>
        <input
          className="user-ID"
          type="text"
          name="Description"
          onChange={changeDescription}
        />
        <br />
        <button className="btn-main" onClick={CreateSolution}>
          {" "}
          Submit{" "}
        </button>
      </div>
    </Fragment>
  );
};

export default NewSolution;
