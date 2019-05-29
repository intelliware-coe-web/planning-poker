import loginImg from '../../resources/images/learning_small.jpg';
import '../../index.css';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {GetUser} from "../Actions/UserActions";
import {UserAPI} from '../API/User.api';

function CreateUser(props) {

    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value.trim());
    }

    const {error, loading, user} = props;

    if(error) {
        console.log('Error occurred: ', error.message);
    }

    if(loading) {
        console.log('Loading...');
    }

    if(user) {
        console.log('User: ', user);
    }

    function onSubmit(e) {
        e.preventDefault();
        const body = {
         name: name
        };
        UserAPI.create(body)
        .then(props.history.push('/meetings'))
        .catch(error => console.log(error));
     }

    return (
        <div className="uk-flex uk-flex-middle uk-height-viewport default-background">
            <div className="uk-width-1-1">
                <img src={loginImg} alt="login"/>
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
            <button onClick={GetUserById}>Click to get user</button>
        </div>
    );

    function GetUserById(){
        props.dispatch(GetUser('5ced95f80dff1a001fd8d107'));
    }

}

const MapStateToProps = state => ({
   user: state.user.items,
   loading: state.user.loading,
   error: state.user.error
});

export default connect(MapStateToProps)(CreateUser)