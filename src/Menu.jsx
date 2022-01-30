import React, { useState, useEffect} from "react";
import axios from 'axios';
import './assetss/css/Menu.css';
import NavBar from "./NavBar";
import ItemMenu from "./ItemMenu";



export default function Menu(){
    const [platos,setPlatos]=useState([]);
    const lista = platos.map((value,i)=>{
        return(
            <ItemMenu image={value.image} title={value.title} key={i} id={value.id}/>
        ) 
    });

    useEffect(() => {
        axios.get("https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=18d90a31a53049138dd147c2f848ff92")
        .then(response=>{setPlatos(response.data.results)})
        .catch(error=>console.log("error"))
      }, []);
        return(
            <div>
                <NavBar/>
                <div className="itemsListaPlatos">
                    {lista}
                </div>
            </div>
        );
}