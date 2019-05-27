import React from 'react';
import {Link} from 'react-router-dom';

export default function CreateUser() {
    return (
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                <h1 className="uk-heading-small">Create New User</h1>                
                <input placeholder="Name" className="uk-input uk-margin"></input>
                <Link to="/meetings/" className="uk-button uk-button-primary">CREATE</Link>
            </div>
        </div>
    );
}