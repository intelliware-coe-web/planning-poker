import React from 'react';
import {Link} from 'react-router-dom';
import rocket from '../resources/images/rocket.jpg';
import styles from './CreateUser.css';

export default function CreateUser() {
    return (
        <div class="uk-flex uk-flex-middle uk-height-viewport login-background">
            <div class="uk-container uk-width-1-2 uk-margin-small">
                <h1>Let's get started</h1> 
                <i><h3>create a new user</h3></i>            
                <div class="uk-inline uk-width-1-1 uk-margin">
                    <span class="uk-form-icon" uk-icon="icon: user"></span>
                    <input class="uk-input" placeholder="Name" type="text"/>
                </div>
                <Link to="/meetings/" className="uk-button uk-button-primary">CREATE</Link>
            </div>
            <div class="uk-container uk-width-1-1">
                <img src={rocket} alt="logo" height="20vmin" data-uk-img/>
            </div>
        </div>
    );
}