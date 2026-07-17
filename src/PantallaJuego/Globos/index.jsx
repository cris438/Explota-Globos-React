import React, { useContext } from "react";
import "./globo.css";
import { ContextJuego } from "../ContextJuego";

function Globo({ color, id }) {
  const { eliminarme } = useContext(ContextJuego)
  return (
    <div className={`globo globo-${color} ${color}`} id={id} onClick={(event) => eliminarme(event.target)}>
      <div className="shine"></div>
      <div className="knot"></div>
      <div className="rope"></div>
    </div>
  );
}

export default Globo;
