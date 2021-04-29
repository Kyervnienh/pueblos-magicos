import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
            <Link className="IconSignUp" to="/">TURI</Link>
            <div className="FormSignUp">
                    <Form>
                        <h1 className="titleSignUp">Regístrate</h1>
                        <Form.Group controlId="formBasicUserName">
                            <Form.Label>Nombre de usuario</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tu nombre de usuario" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
                        </Form.Group>
                        <Form.Group controlId="formBasicFullName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tu nombre completo" />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type={type} placeholder="Contraseña" />
                            </Form.Group>
                            <Form.Group className="showHide" as={Col} controlId="formBasicShowPassword">
                                <span className="password_show" onClick={showHide}>{type === 'input' ? 'Hide' : 'Show'}</span>
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

export default SignUp;
