import React, {useState} from "react";
import '../assetss/css/Ingresar.css';
import logo from'../assetss/img/logo.png';
import axios from 'axios';



export default function Ingresar(props){


    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [enviar, setEnviar] = useState(false);
    const [error, setError] = useState(false);
    const [mensajeError,setMensajeError] = useState("");
    const { email, password } = inputs;
    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const manejadorSubmit=(e)=>{
        e.preventDefault();
        setEnviar(true);
        console.log(enviar)

        axios.post("http://challenge-react.alkemy.org/",inputs)
        .then(response =>{
            console.log(response);
            if(response.status === 200){
                localStorage.setItem("token",response.data.token)
                props.history.push("/Home");
            }
        })
        .catch(error=>
            setError(true),
            setMensajeError("Error en email o contraseña")
        )
    }
    return(
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                    <br/><br/>
                    <img src={logo} width="100px" alt="User Icon" />
                    <br/><br/>
                </div>

                <form onSubmit={manejadorSubmit}>
                    <div>
                        <input type="text"  className="fadeIn second" name="email" placeholder="E-mail" onChange={handleChange}/>
                        {enviar && email=='' &&
                                <div className="error">Email requerido</div>
                            }
                    </div>
                    <div>
                        <input type="password"  className="fadeIn third" name="password" placeholder="Contraseña" onChange={handleChange}/>
                        {enviar && password=='' &&
                                <div className="error">Contraseña requerida</div>
                            }
                    </div>
                        <input type="submit" className="fadeIn fourth" value="Enviar" onSubmit={manejadorSubmit}/>
                </form>
                {error &&
                <div className="alert alert-danger" role="alert">
                    {mensajeError}
                </div>}
            </div>
        </div>
    );
}

