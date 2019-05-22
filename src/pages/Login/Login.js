import React from 'react';
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import Button from "../../components/Button";
import logo from '../../logo.svg';
import './Login.scss';
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <p>Welcome to Planning Poker</p>
            <img src={logo} className="login-logo" alt="logo" />
            <form>
                <EmailInput/>
                <PasswordInput/>
                <Link to="/rooms">
                    <Button name={'Login'}/>
                </Link>
            </form>
        </div>
    );
}

export default Login;