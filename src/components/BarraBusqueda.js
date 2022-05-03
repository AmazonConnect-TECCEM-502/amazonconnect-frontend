import { Fragment } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const BarraBusqueda = (props) => {
  return (
    <Fragment>
      <input type="text" placeholder={`Buscar ${props.tipoBusqueda}`} />
      <AiOutlineSearch />
    </Fragment>
  );
};

export default BarraBusqueda;
