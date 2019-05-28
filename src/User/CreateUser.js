import loginImg from '../resources/images/learning_small.jpg';
import styles from '../index.css';
import React, {useState} from 'react';
import {UserAPI} from './User.api';

export default function CreateUser(props) {

    const [name, setName] = useState('');
    
    function handleChange(e) {
        setName(e.target.value.trim());
    }

    function onSubmit(e) {
        e.preventDefault();
        const body = {
         name: name
        }    
        UserAPI.create(body)
        .then(props.history.push('/meetings'))
        .catch(error => console.log(error));
     }

    return (
        <div className="uk-flex uk-flex-middle uk-height-viewport default-background">
            <div className="uk-width-1-1">
                <img src={loginImg}/>
            </div>
            <div className="uk-container uk-width-1-1 uk-margin-small">
                <h1>Welcome to planning poker</h1> 
                <h3>Create a new user to get started!</h3>            
                <div className="uk-inline uk-width-1-2 uk-margin">
                    <span className="uk-form-icon" uk-icon="icon: user"></span>
                    <input className="uk-input" placeholder="Name" type="text" value={name} 
                    onChange={e => handleChange(e)}/>
                </div>
                <button className="uk-button uk-button-primary uk-width-1-4" onClick={(e) => onSubmit(e)}>
                  CREATE
                </button>
            </div>

        </div>
    );
}