import loginImg from '../../resources/images/learning_small.jpg';
import React from 'react';
import {connect} from 'react-redux';
import {PostUser} from '../Actions/UserActions';

export function CreateUser({postUser}) {

    return (
        <div className="uk-container uk-flex uk-flex-middle uk-height-viewport login">
            <div className="uk-animation-slide-left-medium uk-text-center"><h2>Welcome to planning poker</h2></div>
            <div className="uk-animation-scale-up uk-width-1-2@s uk-width-3-4@m"><img src={loginImg} alt="login"/></div>
            <div>
                <form onSubmit={event => {
                    PostNewUser(event, postUser)
                }}>
                    <div className="uk-margin">
                        <div className="uk-animation-slide-top uk-inline uk-width-1-1 uk-margin-small-top">
                            <span className="uk-form-icon" data-uk-icon="icon: user"/>
                            <input name="userInputName" className="uk-input" placeholder="Name" type="text"/>
                        </div>
                        <input className="uk-animation-slide-bottom uk-button uk-button-primary uk-width-1-1 uk-margin-small-top" type="submit" value="LOGIN / CREATE"/>
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
