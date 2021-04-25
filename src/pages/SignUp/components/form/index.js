import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const SignUp = () => {
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
                        <label className="FormLabel" type="password" required>Nombre Completo</label>
                        <input className="form-control"/>
                        <label className="FormLabel">Contraseña</label>
                        <input className="form-control" type="password" required/>
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
