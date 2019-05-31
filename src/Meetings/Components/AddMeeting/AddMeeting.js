import React from 'react';
import {Link} from 'react-router-dom';

export default function AddMeeting() {
    
    return (
        <div className="uk-container uk-text-center@m uk-margin-top uk-margin-bottom">
            <h1 className="uk-heading-small uk-heading-divider">Add Meeting</h1>
            <a href="#/meetings">
                <span uk-icon="icon: arrow-left; ratio: 3" className="uk-position-large uk-position-top-left"></span>
            </a>
            <div className="uk-align-center uk-width-1-2@m">      
                <input placeholder="Name" className="uk-input uk-margin"></input>
                <Link to="/meetings/" className="uk-button uk-button-primary">Submit</Link>
            </div>
        </div>
    );
}
