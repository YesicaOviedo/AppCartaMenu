import React from "react";
import Receta from "./Receta";

export default function ListaRecetas({recetas}) {

  return (
    <main>
      <section>
        {recetas.map((receta) => {
          return <Receta key={receta.id} receta={receta}/>;
        })}
      </section>
    </main>
  );
}
