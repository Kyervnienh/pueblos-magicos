import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './index.scss';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const baseURL = "http://localhost:8080/users";

const SignUp = (props) => {
    const [type, setType] = useState('password');
    const [users, setUsers] = useState([]);
    const [data, setData] = useState({ name: '', username: '', email: '', password: '', isAdmin: false });

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await fetch(baseURL);
            const data = await response.json();
            setUsers(data);
          } catch(error) {
            console.error(error);
          }
        };
    
        getData();
      }, []);
    

    const showHide = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setType(type === 'input' ? 'password' : 'input');
     };

     const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const handleInputChangePassword = (event) => {
      setData({
          ...data,
          [event.target.name] : event.target.value
      })
  }

    const addUser = async (event) => {
      event.preventDefault()
        setData({...data});
        try {
          const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          if (!response.ok) throw new Error("Response not ok");
    
          const newUser = await response.json();

          setUsers(users.concat([newUser]));
        } catch (error) {
          console.error(error);
        }
        props.history.push('/');
      }

    return (
        <>
            <Link className="IconSignUp" to="/">TURI</Link>
            <div className="FormSignUp">
                    <Form onSubmit={addUser}>
                        <h1 className="titleSignUp">Regístrate</h1>
                        <Form.Group controlId="formBasicUserName">
                            <Form.Label>Nombre de usuario</Form.Label>
                            <Form.Control onChange={handleInputChange} type="text" placeholder="Ingresa tu nombre de usuario" name="username" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control onChange={handleInputChange} type="email" placeholder="Ingresa tu correo electrónico" name="email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicFullName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control onChange={handleInputChange} type="text" placeholder="Ingresa tu nombre completo" name="name" />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control onChange={handleInputChangePassword} type={type} placeholder="Contraseña" name="password" />
                            </Form.Group>
                            <Form.Group className="showHide" as={Col} controlId="formBasicShowPassword">
                                <span className="password_show" onClick={showHide}>{type === 'input' ? (<AiFillEye/>)  : (<AiFillEyeInvisible/>)}</span>
                            </Form.Group>
                        </Form.Row>
                        <button className="FormButtonSignUp" type="submit">Regístrate</button>
                            <Form.Group controlId="formBasicSignInOption">
                                <span className="TextSignUp">¿Tienes cuenta? <Link to="iniciarsesion"> Inicia sesión</Link></span>
                            </Form.Group>
                    </Form>
            </div>
        </>
    )
}

export default withRouter(SignUp);
