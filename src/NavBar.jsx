import React, {useState,useEffect} from "react";
import axios from 'axios';
import './assetss/css/NavBar.css';
import ListaRecetas from "./ListaRecetas";
import { URL } from "./services/ApiRest";




export default function NavBar(){
    const [recetas,setRecetas]=useState(null);
    const [nombrePlato, setNombrePlato]=useState("");
    
    const handleChange= (e) => {
        setNombrePlato(e.target.value);
    }

    const Buscar= (e) => {
        axios.get(URL + `recipes/autocomplete?number=10&query=${nombrePlato}&apiKey=18d90a31a53049138dd147c2f848ff92`)
        .then(response=>{setRecetas(response.data)})
        .catch(error=>console.log("error"))
    }
    return(
        <div className="contenedor">
            <div className="estiloBarra">
                <div  className="div-input">
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={handleChange}
                        />
                </div>
                <div className="div-btn">
                    <button className="btn" onClick={Buscar}>Search</button>
                </div>
            </div>
            <div className="contenedorRecetas">
                {recetas &&
                    <ListaRecetas recetas={recetas}/>}
            </div>
        </div>
    );
}









