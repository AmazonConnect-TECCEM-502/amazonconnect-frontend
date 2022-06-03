import { Fragment, useContext, useState } from "react";
import toast from 'react-hot-toast';
import { AdminContext } from "../AdminContextProvider";

const NewProblem = (props) => {
  const [,,,,categories,setCategories] = useContext(AdminContext);
  const [descriptionProblem, setDescriptionProblem] = useState("");
  const [category_id,setCategoryid] = useState("")

  const changeDescription = (event) =>{
    setDescriptionProblem(event.target.value)
  };

  const changeCategoryID= (event) =>{
    console.log(event.target.value)
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
    if ((descriptionProblem.toString() && category_id) !== ''){
      await fetch(`http://localhost:8080/problem/postCreateProblem`,request_options);
      toast.success("New Problem created")
    }else{
      toast.error("All fields must be filled")
    }
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
      </div>
    </Fragment>
  );
};

export default NewProblem;
