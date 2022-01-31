import React from "react";
import Receta from "./Receta";
import "./assetss/css/Receta.css"
export default function ListaRecetas({recetas}) {

  return (
 
      <div  className="gridContenedor">
        {recetas.map((receta) => {
          return <Receta key={receta.id} receta={receta}/>;
        })}
      </div>

  );
}
