import axios from "axios";
import React, { useState, useEffect } from "react";
import { URL } from "./services/ApiRest";
import "./assetss/css/Receta.css"

export default function Receta({receta}) {
  const [descripcion, setDescripcion]=useState("");

  
  //https://api.spoonacular.com/recipes/${receta.id}/information?apiKey=cb1c464d94f142c08b156c5beddade8b&includeNutrition=true
  useEffect(() => {
      axios.get(URL + `recipes/${receta.id}/summary?apiKey=18d90a31a53049138dd147c2f848ff92`)
      .then((response) =>{setDescripcion(response.data.summary)})
      .catch(() => {
        console.log("error");
      });
  }, []);

  return (
      <ul>
        <li type= "none">
        <div className="card" style={{width: "18rem", height: "18rem",overflow: "auto"}}>
          <div className="card-body">
              <h5 className="card-title">{receta.title}</h5>
              <div className="card-text" dangerouslySetInnerHTML={{__html:"<p>" + descripcion + "</p>"}}/>
              <a href="#" className="btn btn-primary">agregar</a>
          </div>
        </div>
        </li>
      </ul>
  );
}