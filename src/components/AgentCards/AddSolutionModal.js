import { useContext, useState } from "react";
import { AgentContext } from "../AgentView/AgentProvider";

const AddSolutionModal = (props) => {
  const [,,,,questions] = useContext(AgentContext);
  const [solutionDescription, setSolutionDescription] = useState("");

  const user_id = localStorage.getItem("user_id");

  const textHandler = (event) => {
    setSolutionDescription(event.target.value);
  }

  const sendSolution = async (event) => {
    event.preventDefault();
    
    const newSolution = {
      problem_id: questions[0].problem_id,
      solution_description: solutionDescription,
      submitted_id: user_id ? user_id : 1,
    }

    await fetch("http://localhost:8080/problem/postCreateSolution", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSolution),
    });
    console.log("Solution sended");
    props.addSolution(false);
  }
  
  return(
    <div className="modal-bg-add">
      <form className="modal-card">
        <div className="close-btn" onClick={() => props.addSolution(false)}>+</div>
        <label for="solution"> {questions[0].problem_id}: {questions[0].problem_description} </label>
        <br/>
        <textarea 
          id="" 
          name="solution" 
          placeholder="Write your solution..." 
          rows="30" 
          cols="80"
          onChange={textHandler}>
        </textarea>
        <br/>
        <button 
          className="btn-main" 
          onClick={sendSolution}>
            Send Answer
        </button>
      </form>
    </div>
  )
};

export default AddSolutionModal