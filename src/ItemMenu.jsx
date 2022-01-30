import React from "react";
import './assetss/css/Menu.css';
import axios from 'axios';



export default function ItemMenu(props){
    return(
        <ol key={props.key}>
            <hr/>
                <li type= "none">
                    <div className="img-h2">
                        <img src={props.image} className="img"/>
                        <h2>{props.title}</h2>
                    </div>
                    <button className="btn">Eliminar</button>
                </li>
            <hr/>
        </ol>

    );

}