import React from 'react';
import {Link} from 'react-router-dom';

export default function AddMeeting() {
    
    return (
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                <h1 className="uk-text-center uk-heading-divider">Create Meeting</h1>                
                <div className="uk-flex uk-flex-column uk-flex-middle">
                    <input placeholder="Name" className="uk-input uk-margin"></input>
                    <Link to="/meetings/" className="uk-button uk-button-primary">Submit</Link>
                </div>
            </div>
        </div>
    );
}
