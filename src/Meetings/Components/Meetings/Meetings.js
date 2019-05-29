import React from 'react';
import MeetingButtons from '../MeetingButtons/MeetingButtons'
import AddMeetingButton from '../AddMeetingButton/AddMeetingButton'

export default function Meetings() {

    return (
        <div className="default-background">
            <div className="uk-container uk-text-center@m">
                <h1 className="uk-heading-divider uk-margin-top">Meetings</h1>
                <div className="uk-align-center uk-width-1-2@m">                
                    <MeetingButtons />
                    <AddMeetingButton />
                </div>
            </div>
        </div>
    );
}
