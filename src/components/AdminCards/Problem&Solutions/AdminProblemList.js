/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: Component that fetch all the problems for the update problem card.
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
      <p className="title"> Update Problem Solutions </p>
      <div className="container-questions">
        {arrpreguntas.map((pregunta) => (
          <AdminProblem text={pregunta.question} problem_id={pregunta.ID} />
        ))}
        {arrpreguntas.length === 0 && <p>No hay registros</p>}
      </div>
    </Fragment>
  );
};

export default AdminProblemList;
