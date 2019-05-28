import React from 'react';
import {Link} from 'react-router-dom';
import './Meetings.css';

const meetings = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

export default function Meetings() {

    return (
        <>
        <div className="default-background">
            <div className="uk-container uk-text-center@m">
                <h1 className="uk-heading-divider uk-margin-top">Meetings</h1>
                <a href="#/">
                    <span uk-icon="icon: arrow-left; ratio: 3" className="uk-position-large uk-position-top-left"></span>
                </a>
                <div className="uk-align-center uk-width-1-2@m">                
                    { GetMeetingButtons() }
                    { GetAddMeetingButton() }
                </div>
            </div>
        </div>
        </>
    );
}

function GetMeetingButtons() {
    if (meetings.length === 0) {
        return <span>No meetings scheduled</span>
    }
    return meetings.map((meeting, index) => 
        <div key={index}>
                <Link to="/host">
                    <div className="uk-card uk-card-secondary uk-card-body meeting-card">
                        <h3 className="uk-card-title">{meeting}</h3>
                    </div>
                </Link>
            <br/>
        </div>
    );
}

function GetAddMeetingButton() {
    return (
        <Link to="/meeting/add">
            <div className="uk-card uk-card-secondary uk-card-body add-card">
                <h3 className="uk-card-title">+</h3>
            </div>
        </Link>
    );
}