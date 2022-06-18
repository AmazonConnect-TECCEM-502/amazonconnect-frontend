/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: Represent a category for the categories list in the admin page. 
  Functionalities:
    - Fetch all the problems for the selected category.

*/
import { Fragment, useContext } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AdminContext } from "../AdminContextProvider";

const AdminCategory = (props) => {
  const [, , , , , , , , , setPreguntas,,,,setCategories,,setCategoryid] = useContext(AdminContext);

  const ProblemsCard = async () => {
    // Response to the button of a category.
    // Fetch all the problems of that category.
    setCategories(props.text)
    setCategoryid(props.category_id.toString())
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/problem/getProblemid/${props.category_id.toString()}`
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
