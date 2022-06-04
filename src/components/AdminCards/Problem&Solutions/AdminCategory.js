/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: 

*/
import { Fragment, useContext } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AdminContext } from "../AdminContextProvider";

const AdminCategory = (props) => {
  const [, , , , , , , , , setPreguntas,,,,setCategories] = useContext(AdminContext);

  const ProblemsCard = async () => {
    setCategories(props.text)
    const response = await fetch(
      `http://localhost:8080/problem/getProblemid/${props.category_id.toString()}`
    );
    const JSON = await response.json()
    console.log(JSON)
    setPreguntas(JSON);
    const card = document.getElementById("card-15");
    card.style.display = "block";
  };

  return (
    <Fragment>
      <div className="container-question">
        <p className="question">{props.text}</p>
        <AiOutlinePlusSquare
          className="icon-buttons"
          size={20}
          onClick={ProblemsCard}
        />
      </div>
    </Fragment>
  );
};

export default AdminCategory;
