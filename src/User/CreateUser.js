import React from 'react';
import {connect} from 'react-redux';
import {FetchUser} from "../Actions/UserActions";

function CreateUser(props) {

    const {error, loading, user} = props;

    if(error) {
        // console.log('Error occured', error.message);
    }

    if(loading) {
        // console.log('Loading...');
    }

    if(user) {
        // console.log('User: ' + user);
    }
    
    return (
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                <h1 className="uk-heading-small">Create New User</h1>
                <input placeholder="Name" className="uk-input uk-margin"></input>
                <a href="#/meetings/" className="uk-button uk-button-primary">CREATE</a>
            </div>
            <button onClick={GetUser}>Click to get user</button>
        </div>
    );

    function GetUser(){
        props.dispatch(FetchUser());
    }
}


const MapStateToProps = state => ({
   user: state.user.items,
   loading: state.user.loading,
   error: state.user.error
});

export default connect(MapStateToProps)(CreateUser)