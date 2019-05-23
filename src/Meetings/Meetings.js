import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Meetings extends Component {
    meetings = []; 

    constructor() {
        super();
        this.meetings = ['Meeting A', 'Meeting B', 'Meeting C', 'Meeting D', 'Meeting E'];
    }

    get meetingButtons() {
        if(this.meetings.length === 0) {
            return <span>No meetings scheduled</span>
        }
        return this.meetings.map((meeting, index) => <Link to="/" key={index} className="uk-margin uk-button-secondary uk-button-large uk-text-large">{meeting}</Link>);    
    }

    render() {
        return (
            <div className="uk-flex uk-flex-center">
                <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                    <h1 className="uk-text-center uk-heading-divider">MEETINGS</h1>                
                    <div className="uk-flex uk-flex-column uk-flex-middle">
                        { this.meetingButtons }
                    </div>
                </div>
            </div>
        );
    }
    
}
