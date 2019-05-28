import React, {useState} from 'react';
import {connect} from 'react-redux';
import {FetchUser} from "../Actions/FetchUserActions";
import {UserAPI} from './User.api';

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
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                <h1 className="uk-heading-small">Create New User</h1>
                <input placeholder="Name" className="uk-input uk-margin"
                    value={name}
                    onChange={e => handleChange(e)}>
                </input>
                <button className="uk-button uk-button-primary"
                    onClick={(e) => onSubmit(e)}>CREATE
                </button>
            </div>
            <button onClick={GetUser}>Click to get user</button>
        </div>
    );

    function GetUser(){
        props.dispatch(FetchUser('5ced95f80dff1a001fd8d107'));
    }

}

const MapStateToProps = state => ({
   user: state.user.items,
   loading: state.user.loading,
   error: state.user.error
});

export default connect(MapStateToProps)(CreateUser)