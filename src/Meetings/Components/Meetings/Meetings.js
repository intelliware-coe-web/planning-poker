import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {viewCreateMeeting, viewMeeting} from '../../../Navigation/route-actions';
import {Page} from '../../../Common/Page';
import {GetMeetings} from "../../Actions/MeetingsActions";

export function Meetings({meetings = [], goToMeeting, goToCreateMeeting, getMeetings}) {

    useEffect(
        () => {
            getMeetings();
        },
        [getMeetings]
    );
    
    return (
        <Page title='Meetings'>

            {meetings.map((meeting, index) =>
                <div className="uk-margin-small" key={index}>
                    <div className="uk-card uk-card-secondary uk-card-body pp-button"
                         onClick={() => goToMeeting(meeting._id)}>
                        <h3 className="uk-card-title">{meeting.name}</h3>
                    </div>
                </div>
            )}

            <div className="uk-card uk-card-secondary uk-card-body pp-secondary-button" onClick={goToCreateMeeting}>
                <h3 className="uk-card-title">+</h3>
            </div>
        </Page>
    );
}

function mapStateToProps(state) {
    return {
        meetings: state.meetings,
        error: state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMeetings: () => dispatch(GetMeetings()),
        goToMeeting: (meetingId) => dispatch(viewMeeting(meetingId)),
        goToCreateMeeting: () => dispatch(viewCreateMeeting())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meetings)
