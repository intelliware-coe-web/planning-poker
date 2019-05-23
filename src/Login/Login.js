import React from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';

export default function Login() {
    
    return (
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                <img src={logo} alt="logo" height="40vmin" data-uk-img className="uk-animation-kenburns uk-align-center"/>
                <h1>Planning Poker</h1>
                <input placeholder="EMAIL" className="uk-input uk-margin-top" type="email"></input>
                <input placeholder="PASSWORD" className="uk-input uk-margin" type="password"></input>
                <Link to="/rooms/" className="uk-button uk-button-primary">LOGIN</Link>
            </div>
        </div>
    );
}