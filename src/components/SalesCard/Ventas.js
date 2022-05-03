import { Fragment } from "react";
import Tarjeta from "./Tarjeta";

const productos = [{title: "producto1",
                    desc: "la desc"},
                    {title: "producto2",
                    desc: "la desc"},
                    {title: "producto3",
                    desc: "la desc"},
                ];

const Ventas = (props) => {
  return (
    <Tarjeta
      componente={productos.map((producto) => (
        <Fragment>
          <h1>{producto.title}</h1>
          <p>{producto.desc}</p>
        </Fragment>
      ))}
    />
  );
};

export default Ventas;