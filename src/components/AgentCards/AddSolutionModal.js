/*
  Author: Diego Armando Ulibarri Hernández

  Description: It's a popup screen that is triggered by clicking
  the add solution button found in the AnswerList component

  Usage: addSolution receives a method for you to indicate the 
  state in which the modal is Ex. addSolution(false) -> set modal = false

  modal && <AddSolutionModal addSolution={addNewSolution}/>
*/

import { useContext, useState } from "react";
import { AgentContext } from "../AgentView/AgentProvider";

const AddSolutionModal = (props) => {
  // Receives questions from agentContext to get the title of the
  // question to which you want to add a solution
  const [, , , , questions] = useContext(AgentContext);
  // Contains the solution to be added to the question
  const [solutionDescription, setSolutionDescription] = useState("");
  // Id of the user that is logedIn
  const user_id = localStorage.getItem("user_id");
  // Function whose purpose is to change the value of the solution
  const textHandler = (event) => {
    setSolutionDescription(event.target.value);
  };

  /**
   * It sends a POST request to the server with the solution description,
   * the problem id and the user_id
   * @param event - the event that triggered the function
   */
  const sendSolution = async (event) => {
    event.preventDefault();
    const newSolution = {
      problem_id: questions[0].problem_id,
      solution_description: solutionDescription,
      submitted_id: user_id ? user_id : 1,
    };
    await fetch("http://localhost:8080/problem/postCreateSolution", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSolution),
    });
    console.log("Solution sended");
    props.addSolution(false);
  };

  return (
    <div className="modal-bg-add">
      <form className="modal-card">
        <div className="close-btn" onClick={() => props.addSolution(false)}>
          +
        </div>
        <label for="solution"> {questions[0].problem_description} </label>
        <br />
        <textarea
          id=""
          name="solution"
          placeholder="Write your solution..."
          rows="30"
          cols="50"
          onChange={textHandler}
        ></textarea>
        <br />
        <button className="btn-main" onClick={sendSolution}>
          Send Answer
        </button>
      </form>
    </div>
  );
};

export default AddSolutionModal;
