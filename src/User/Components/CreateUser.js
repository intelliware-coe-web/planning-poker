import loginImg from '../../resources/images/learning_small.jpg';
import React from 'react';
import { connect } from 'react-redux';
import { PostUser } from '../Actions/UserActions';

export function CreateUser({postUser}) {

    return (
        <div className="uk-flex uk-flex-middle uk-height-viewport">
            <div className="uk-width-1-1">
                <img src={loginImg} alt="login"/>
            </div>
            <div className="uk-container uk-width-1-1 uk-margin-small">
                <h1>Welcome to planning poker</h1>
                <h3>Create a new user to get started!</h3>
                <form onSubmit={event => {PostNewUser(event, postUser)}}>
                    <div className="uk-margin">
                        <div className="uk-inline uk-width-1-2">
                            <span className="uk-form-icon" data-uk-icon="icon: user"/>
                            <input name="userInputName" className="uk-input" placeholder="Name" type="text"/>
                        </div>
                        <button className="uk-button uk-button-primary uk-width-1-4">
                            CREATE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

    function PostNewUser(event, postUser) {
        event.preventDefault();
        postUser(event.target.userInputName.value.trim());
    }

}

const MapDispatchToProps = dispatch => ({
    postUser: (username) => dispatch(PostUser(username)),
});

export default connect(null, MapDispatchToProps)(CreateUser)
