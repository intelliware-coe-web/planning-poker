import React from 'react';
import {Link} from 'react-router-dom';

const meetings = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

export default function Meetings() {
    
    return (
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                <h1 className="uk-text-center uk-heading-divider">Meetings</h1>                
                <div className="uk-flex uk-flex-column uk-flex-middle">
                    { GetButtons() }
                </div>
            </div>
        </div>
    );
}

function GetButtons() {
    if(meetings.length === 0) {
        return <span>No meetings scheduled</span>
    }
    return meetings.map((meeting, index) => <Link to="/" key={index} className="uk-button uk-button-primary uk-width-1-1 uk-margin uk-text-large">{meeting}</Link>);
}