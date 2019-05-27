import React from 'react';
import {Link} from "react-router-dom";

export default function Ticket() {

    return (
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                <h1 className="uk-heading-small uk-text-center">Add a Ticket</h1>
                <input placeholder="Ticket #" className="uk-input uk-margin uk-width-1-2@m uk-align-center"></input>
                <Link to="/host/" className="uk-button uk-button-primary uk-width-1-2@m uk-align-center">CREATE</Link>
            </div>
        </div>
    );
};