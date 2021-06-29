import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "./index.scss";
import Cookies from "universal-cookie";
import Alert from "react-bootstrap/Alert";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const baseURL = "http://localhost:8080/users";

const cookies = new Cookies();

function PasswordIncorrect(props) {
  if (!props.isLoggedIn) {
    return (
      <Alert variant="danger">
        <Alert.Heading>
          La contraseña y nombre de usuario no coinciden
        </Alert.Heading>
      </Alert>
    );
  } else {
    return null;
  }
}

const Login = (props) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [isCorrect, setisCorrect] = useState(true);
  const [type, setType] = useState("password");

  const handleInputChange = async (event) => {
    await setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const logInSesion = async () => {
    try {
      const response = await fetch(`${baseURL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        setisCorrect(false);
        throw new Error("Response not ok");
      }
      const data = await response.json();
      setisCorrect(true);
      cookies.set("name", data.name, { path: "/" });
      cookies.set("username", data.username, { path: "/" });
      cookies.set("isAdmin", data.isAdmin, { path: "/" });
      cookies.set("token", data.token, { path: "/" });
      cookies.set("email", data.email, { path: "/" });
      cookies.set("userId", data.id, { path: "/" });
      cookies.set("image", data.image, { path: "/" });
      cookies.set("description", data.description, { path: "/" });
      props.history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (cookies.get("username")) {
      props.history.push("/");
    }
    // eslint-disable-next-line
  }, []);

  const showHide = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setType(type === "password" ? "input" : "password");
  };
  return (
    <>
      <Link className="IconSignIn" to="/">
        TURI
      </Link>
      <div className="FormLogIn">
        <Form>
          <h1 className="title">Inicia sesión</h1>
          <Form.Group controlId="formBasicUserName">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              onChange={handleInputChange}
              type="text"
              placeholder="Ingresa tu nombre de usuario"
              name="username"
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                type={type}
                placeholder="Contraseña"
                name="password"
              />
            </Form.Group>
            <Form.Group
              className="showHide"
              as={Col}
              controlId="formBasicShowPassword"
            >
              <span className="password_show" onClick={showHide}>
                {type === "input" ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </Form.Group>
          </Form.Row>
          <div className="text-center">
            <button onClick={logInSesion} type="button" className="FormButton">
              Continuar
            </button>
            <PasswordIncorrect isLoggedIn={isCorrect} />
          </div>
          <Form.Group controlId="formBasicSignInOption">
            <span className="TextSignUp">
              ¿No tienes cuenta? <Link to="registrate"> Regístrate</Link>
            </span>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

PasswordIncorrect.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default withRouter(Login);
