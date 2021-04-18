import React from 'react';
import './index.scss';

const Login = () => {
  return (
    <div className="Container">
      <div className="FormWrap">
        <div className="FormContent">
          <form className="Form">
            <h1 className="title">Inicia Sesión</h1>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Usuario
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Constraseña
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="text-center">
              <button type="submit" class="FormButton">
                Continuar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
