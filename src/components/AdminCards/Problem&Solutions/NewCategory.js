/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: Component that show the card to add a new category
*/
import { Fragment, useState } from "react";
import toast from 'react-hot-toast';

const NewCategory = (props) => {
  const [description, setDescription] = useState("");
  const [name,setName] = useState("")
  

  const changeDescription = (event) =>{
      //Listen to change on "Description" input
    setDescription(event.target.value)
  };

  const changeName = (event) =>{
      //Listen to change on "Name" input
    setName(event.target.value)
  };

  const CreateCategory = async () => {
    const request_options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category_description: description,
        category_name: name,
      }),
    };
    if ((description && name) !== ''){
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/problem/postCreateCategory`,request_options);
      toast.success("New Category created")
    }else{
      toast.error("All fields must be filled")
    }
  };

  return (
    <Fragment>
      <div className="title"> Create Category</div>
      <div className="new">
        <p>Name: </p>
        <input className="user-ID" type="text" name="Name" onChange={changeName}/>
        <p>Description: </p>
        <input className="user-ID" type="text" name="Description" onChange={changeDescription}/>
        <br />
        <button className="btn-main" onClick={CreateCategory}> Submit </button>
      </div>
    </Fragment>
  );
};

export default NewCategory;
