import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './index.scss';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import Alert from 'react-bootstrap/Alert';

const baseURL = "http://localhost:4000/users/?";

const cookies = new Cookies();

function PasswordIncorrect(props) {
  if(!props.isLoggedIn){
  return <Alert variant="danger"><Alert.Heading>La contraseña y nombre de usuario no coinciden</Alert.Heading></Alert>
  } else {
    return null;
  }
}

const Login = (props) => {
  const [form, setForm] = useState({ username: '', password: '', isLogged: false });
  const [isCorrect, setisCorrect] = useState(true);

  const handleInputChange = async event => {
    await setForm({
        ...form,
        [event.target.name] : event.target.value
    })
    console.log(form);
}

const logInSesion = async () => {
  try {
    const response = await fetch(baseURL  + new URLSearchParams({
      username: form.username,
      password: md5(form.password),
  }));
    const data = await response.json();
    if (data.length > 0) {
      let resp = data[0];
      console.log(resp);
      cookies.set('id', resp.id, {path:"/"});
      cookies.set('email', resp.email, {path:"/"});
      cookies.set('isLogged', resp.isLogged, {path:"/"});
      cookies.set('name', resp.name, {path:"/"});
      cookies.set('username', resp.username, {path:"/"});
      setisCorrect(true);
      props.history.push('/');

    } else {
      setisCorrect(false);
    }
  } catch(error) {
    console.error(error);
  }
}

useEffect(() => {
  if(cookies.get('username')) {
    props.history.push('/');
  }
}, []);
  return (
    <div className="Container">
      <Link className="IconSignIn" to ="/">TURI</Link>
      <div className="FormWrap">
        <div className="FormContent">
          <form className="Form" >
            <h1 className="title">Inicia Sesión</h1>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Usuario
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                name="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Constraseña
              </label>
              <input
                onChange={handleInputChange}
                type="password"
                className="form-control"
                name="password"
              />
            </div>
            <div className="text-center">
              <button onClick={logInSesion} type="button" className="FormButton">
                Continuar
              </button>
              <PasswordIncorrect isLoggedIn={isCorrect}/>
            </div>
            <span className="Text">¿No tienes una cuenta? <Link to="/registrate">Regístrate</Link></span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
