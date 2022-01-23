import React, { useState, useEffect} from "react";
import axios from 'axios';


export default function Menu(){
    const [platos,setPlatos]=useState([])

    useEffect(() => {
        axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=18d90a31a53049138dd147c2f848ff92")
        .then(response=>{setPlatos(response.data.results)})
        .catch(error=>console.log("error"))
      }, []);
        return(
            <div>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Nombre del plato</th>
                        </tr>
                    </thead>
                {platos.map((value,i)=>{
                   return(
                    <tr key={i}>
                    <td>{value.title}</td>
                    </tr>
                   ) 
                })

                }

                </table>

            </div>
        );
}