import React from 'react';
import {Link} from 'react-router-dom';

const meetings = ['Meeting A', 'Meeting B', 'Meeting C', 'Meeting D', 'Meeting E'];

export default function Meetings() {
    
    return (
        <div className="uk-container uk-text-center@m uk-margin-top">
            <h1 className="uk-heading-small uk-heading-divider">Meetings</h1>
            <div className="uk-flex uk-flex-column uk-flex-middle uk-width-1-1">
                { GetMeetingButtons() }
                { GetAddMeetingButton() }
            </div>
        </div>
    );
}

function GetMeetingButtons() {
    if (meetings.length === 0) {
        return <span>No meetings scheduled</span>
    }
    return meetings.map((meeting, index) => 
        <button className="uk-margin uk-button-secondary uk-width-1-2 uk-text-large">
            <Link to="/host" key={index} >
                <div className="uk-card uk-card-secondary uk-card-body">
                    <h3 className="uk-card-title">{meeting}</h3>
                </div>
            </Link>
        </button>
    );
}

function GetAddMeetingButton() {
    return (
        <button className="uk-margin uk-button-secondary uk-width-1-2 uk-text-large">
            <Link to="/meetings/add">
                <div className="uk-card uk-card-secondary uk-card-body">
                    <h3 className="uk-card-title">+</h3>
                </div>
            </Link>
        </button>
    );
}