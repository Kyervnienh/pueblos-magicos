import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const SignUp = () => {
    const [type, setType] = useState('input');

    const showHide = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setType(type === 'input' ? 'password' : 'input');
     };
    return (
        <>
        <div className="Container">
            <Link className="IconSignUp" to="/">TURI</Link>
            <div className="FormWrapSignUp">
                <div className="FormContent">
                    <form action="#" className="FormSignUp">
                        <h1 className="titleSignUp">Regístrate</h1>
                        <label className="FormLabel" htmlFor="exampleInputEmail1">Nombre de usuario</label>
                        <input className="form-control"/>
                        <label className="FormLabel" htmlFor="exampleInputEmail1">Correo Electrónico</label>
                        <input className="form-control"/>
                        <label className="FormLabel"required>Nombre Completo</label>
                        <input className="form-control"/>
                        <label className="FormLabel">Contraseña</label>
                        <input className="form-control" type={type} required/>
                        <span className="password_show" onClick={showHide}>{type === 'input' ? 'Hide' : 'Show'}</span>
                        <button className="FormButton">Regístrate</button>
                        <span className="TextSignUp">¿Tienes cuenta? <Link to="iniciarsesion">Inicia sesión</Link></span>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignUp;
