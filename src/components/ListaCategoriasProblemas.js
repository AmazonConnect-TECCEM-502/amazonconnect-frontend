import RenglonCategoriaProblema from "./RenglonCategoriaProblema";
import BarraBusqueda from "./BarraBusqueda";
import { Fragment } from "react";

const ListaCategoriasProblemas = (props) => {
  return (
    <Fragment>
      <BarraBusqueda tipoBusqueda="preguntas" />
      <div
        onClick={() => {
          console.log("click");
        }}
      >
        <RenglonCategoriaProblema text="Internet issues" />
      </div>
      <RenglonCategoriaProblema text="Account status" />
    </Fragment>
  );
};

export default ListaCategoriasProblemas;
