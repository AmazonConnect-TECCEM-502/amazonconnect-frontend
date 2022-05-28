import { Fragment, useEffect, useState } from "react";
import UpdateQuestions from "./UpdateQuestions";

const UpdateQuestionList = (props) => {
  const [arrpreguntas, setPreguntas] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log("Descargando datos...");
    fetch("http://localhost:8080/problem/getProblemid")
      .then((response) => response.json())
      .then((data) => {
        if (data[0] === undefined) {
          setError(true);
        } else {
          const preguntas = data;
          setPreguntas(preguntas);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Fragment>
      <p className="title"> Update Questions & Answers </p>
      <div className="container-questions">
      {
        arrpreguntas.map((pregunta) => (
            <UpdateQuestions text = {pregunta.question} name = {pregunta.ID}/>
      ))
      }
      </div>
    </Fragment>
  );
};

export default UpdateQuestionList;
