/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: 

*/


import { Fragment, useContext, useEffect} from "react";
import { AdminContext } from "../AdminContextProvider";
import AdminProblem from "./AdminProblem";


const AdminProblemList = (props) => {
  const [,,,,,,,,arrpreguntas,setPreguntas]= useContext(AdminContext);

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
      <p className="title"> Update Problems and Solutions </p>
      <div className="container-questions">
        {arrpreguntas.map((pregunta) => (
          <AdminProblem text={pregunta.question} pregunta_id={pregunta.ID} />
        ))}
        {arrpreguntas.length === 0 && <p>No hay registros</p>}
      </div>
    </Fragment>
  );
};

export default AdminProblemList;
