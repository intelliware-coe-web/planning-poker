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
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                <h1 className="uk-heading-small">Create New User</h1>                
                <input placeholder="Name" className="uk-input uk-margin" 
                    value={name} 
                    onChange={e => handleChange(e)}></input>
                <button className="uk-button uk-button-primary"
                    onClick={(e) => onSubmit(e)}>CREATE</button>
            </div>
        </div>
    );
}