import React from 'react';
const meetings = ['Meeting A', 'Meeting B', 'Meeting C', 'Meeting D', 'Meeting E'];

export default function Meetings() {
    
    return (
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                <h1 className="uk-text-center uk-heading-divider">MEETINGS</h1>                
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
    return meetings.map((meeting, index) => <button key={index} className="uk-margin uk-button-secondary uk-button-large uk-text-large">{meeting}</button>);
}