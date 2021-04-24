import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Login = () => {
  return (
    <div className="Container">
      <Link className="Icon" to ="/">TURI</Link>
      <div className="FormWrap">
        <div className="FormContent">
          <form className="Form">
            <h1 className="title">Inicia Sesión</h1>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Usuario
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Constraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="text-center">
              <button type="submit" className="FormButton">
                Continuar
              </button>
            </div>
          </form>
          <span className="Text">No te has registrado? Regístrate <Link to="/registrate">aqui</Link></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
