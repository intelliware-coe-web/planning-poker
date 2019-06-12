import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {viewCreateMeeting, viewMeeting} from '../../../Navigation/route-actions';
import {DeleteMeeting, GetMeetings} from '../../Actions/MeetingsActions';
import {Page} from '../../../Common/Page';

export function Meetings({meetings = [], goToMeeting, deleteMeeting, goToCreateMeeting, getMeetings}) {
    useEffect(
        () => {
            getMeetings();
        },
        [getMeetings]
    );

    return (
        <Page title='Meetings'>
            {meetings.map((meeting, index) =>
                <div key={index} className="uk-card uk-card-primary uk-card-body uk-margin-small">
                    <h3 className="uk-card-title" onClick={() => goToMeeting(meeting._id)}>
                        <a className="uk-link-heading">{meeting.name}</a>
                    </h3>
                    <button
                        className="uk-position-center-right uk-margin-small-right"
                        data-uk-icon="icon: trash"
                        onClick={() => RemoveMeeting(meeting._id)}>
                    </button>
                </div>
            )}

            <div className="uk-card uk-card-secondary uk-card-body" onClick={goToCreateMeeting}>
                <h3 className="uk-card-title">+</h3>
            </div>
        </Page>
    );

    function RemoveMeeting(meetingId) {
        deleteMeeting(meetingId);
    }
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
        deleteMeeting: (meetingId) => dispatch(DeleteMeeting(meetingId)),
        goToCreateMeeting: () => dispatch(viewCreateMeeting())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meetings)
