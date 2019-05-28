import React from 'react';
import {Link} from 'react-router-dom';

const meetings = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

export default function Meetings() {

    return (
        <div className="uk-container uk-text-center@m uk-margin-top uk-margin-bottom">
            <h1 className="uk-heading-divider">Meetings</h1>
            <div className="uk-align-center uk-width-1-2@m">                
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
        <div key={index}>
            <button className="uk-button uk-margin-small-top uk-button-secondary uk-width-1-1 uk-inline">
                <Link to="/host">
                    <div className="uk-card uk-card-secondary uk-card-body">
                        <h3 className="uk-card-title">{meeting}</h3>
                    </div>
                </Link>
            </button>
            <br/>
        </div>
    );
}

function GetAddMeetingButton() {
    return (
        <button className="uk-button uk-margin-small-top uk-button-secondary uk-width-1-1 uk-inline uk-margin-bottom">
            <Link to="/meetings/add">
                <div className="uk-card uk-card-secondary uk-card-body">
                    <h3 className="uk-card-title">+</h3>
                </div>
            </Link>
        </button>
    );
}