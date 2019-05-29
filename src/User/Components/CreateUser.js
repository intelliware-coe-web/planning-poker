import loginImg from '../../resources/images/learning_small.jpg';
import '../../index.css';
import React from 'react';
import {connect} from 'react-redux';
import {PostUser} from "../Actions/UserActions";

function CreateUser(props) {

    return (
        <div className="uk-flex uk-flex-middle uk-height-viewport default-background">
            <div className="uk-width-1-1">
                <img src={loginImg} alt="login"/>
            </div>
            <div className="uk-container uk-width-1-1 uk-margin-small">
                <h1>Welcome to planning poker</h1>
                <h3>Create a new user to get started!</h3>
                <form onSubmit={event => {PostNewUser(event)}}>
                    <div className="uk-margin">
                        <div className="uk-inline uk-width-1-2">
                            <span className="uk-form-icon" uk-icon="icon: user"></span>
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

    function PostNewUser(event) {
        event.preventDefault();
        props.postUser(event.target.userInputName.value.trim());
    }

}

const MapStateToProps = state => ({
   user: state.user.user,
   error: state.user.error
});

const MapDispatchToProps = dispatch => ({
   postUser: (username) => dispatch(PostUser(username))
});

export default connect(MapStateToProps, MapDispatchToProps)(CreateUser)