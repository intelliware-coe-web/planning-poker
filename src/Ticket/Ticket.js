import React from 'react';
import {Link} from "react-router-dom";

export default function Ticket() {

    return (
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                <h1 className="uk-heading-small">Add a Ticket</h1>
                <input placeholder="Ticket #" className="uk-input uk-margin"></input>
                <Link to="/host/" className="uk-button uk-button-primary">CREATE</Link>
            </div>
        </div>
    );
};