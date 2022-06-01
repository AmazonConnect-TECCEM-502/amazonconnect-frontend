import { Fragment, useContext, useState } from "react";
import "../../style/AdminCards/AdminCards.css";
import { AdminContext } from "./AdminContextProvider";
import toast, { Toaster } from 'react-hot-toast';

const NewProblem = (props) => {
  const [,,,,categories,setCategories] = useContext(AdminContext);
  const [descriptionProblem, setDescriptionProblem] = useState("");
  const [category_id,setCategoryid] = useState("")
  const notify = () => toast.success('New Problem Created');

  const changeDescription = (event) =>{
    setDescriptionProblem(event.target.value)
  };

  const changeCategoryID= (event) =>{
    setCategoryid(event.target.value)
    console.log(event.target.value)
  };

  const CreateProblem = async () => {
    const request_options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        problem_description: descriptionProblem.toString(),
        submitted_by: 15,
        category_id: category_id
      }),
    };
    await fetch(`http://localhost:8080/problem/postCreateProblem`,request_options);
    notify();
  };

  const getCategories = async () =>{
    const response = await fetch(`http://localhost:8080/problem/getCategories`)
    const json = await response.json()
    setCategories(json)
  }

  return (
    <Fragment>
      <div className="title"> Create Problem & Solutions </div>
      <div className="new">
        <p>Problem Description: </p>
        <input className="user-ID" type="text" name="Question" onChange={changeDescription}/>
        <p>Category: </p>
        <select className="user-ID" name="select" onClick={getCategories} onChange={changeCategoryID}>
        {categories.map((category) => (
            <option value={category.category_id}>{category.category_name}</option>
        ))}
        </select>
        <br />
        <button className="buttonSubmit" onClick={CreateProblem}> Submit </button>
        <Toaster />
      </div>

    </Fragment>
  );
};

export default NewProblem;
