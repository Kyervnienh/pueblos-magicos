import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const SignUp = () => {
    return (
        <>
        <div className="Container">
            <div className="FormWrap">
                <Link className="Icon" to="/">TURI</Link>
                <div className="FormContent">
                    <form action="#" className="Form">
                        <h1 className="title">Regístrate</h1>
                        <label className="FormLabel" htmlFor="exampleInputEmail1">Username</label>
                        <input className="FormInput"/>
                        <label className="FormLabel" htmlFor="exampleInputEmail1">Email</label>
                        <input className="FormInput"/>
                        <label className="FormLabel" type="password" required>Password</label>
                        <input className="FormInput"/>
                        <label className="FormLabel">Confirm Password</label>
                        <input className="FormInput" type="password" required/>
                        <button className="FormButton">Regístrate</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignUp;
