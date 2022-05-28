/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: 

*/


import { Fragment, useEffect, useState } from "react";
import UpdateQuestions from "./UpdateQuestions";


const UpdateQuestionList = (props) => {
  const [arrpreguntas, setPreguntas] = useState([]);

  useEffect(() => {
    console.log("Descargando datos...");
    fetch("http://localhost:8080/problem/getProblemid")
      .then((response) => response.json())
      .then((data) => {
        const preguntas = data;
        setPreguntas(preguntas);
      })
  }, []);

  return (
    <Fragment>
      <p className="title"> Update Problems & Solutions </p>
      <div className="container-questions">
        {arrpreguntas.map((pregunta) => (
          <UpdateQuestions text={pregunta.question} pregunta_id={pregunta.ID} />
        ))}
      </div>
    </Fragment>
  );
};

export default UpdateQuestionList;
