import React from 'react';
import logo from './images/logo.png';
import {Link} from 'react-router-dom';

export default class Login extends React.Component {
    
    render() {
        return (
            <div className="uk-flex uk-flex-column uk-flex-middle">
                <img src={logo} alt="logo" height="40vmin" uk-img className="uk-animation-kenburns"/>
                <input placeholder="EMAIL" className="uk-margin-top"></input>
                <input placeholder="PASSWORD" className="uk-margin"></input>
                <Link to="/rooms/" className="uk-button uk-button-secondary">LOGIN</Link>
            </div>
        );
    }    
}