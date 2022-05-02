import RenglonCategoriaProblema from "./RenglonCategoriaProblema";
import "../styles/TarjetaCategoriasProblemas.css";
import BarraBusqueda from "./BarraBusqueda";

const TarjetaCategoriasProblemas = (props) => {
  return (
    <div className="tarjeta-categorias-problemas">
      <BarraBusqueda tipoBusqueda="preguntas" />
      <div
        onClick={() => {
          console.log("click");
        }}
      >
        <RenglonCategoriaProblema text="Internet issues" />
      </div>
      <RenglonCategoriaProblema text="Account status" />
    </div>
  );
};

export default TarjetaCategoriasProblemas;
