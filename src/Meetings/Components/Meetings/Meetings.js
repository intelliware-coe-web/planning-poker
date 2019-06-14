import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {viewCreateMeeting, viewMeeting} from '../../../Navigation/route-actions';
import {DeleteMeeting, GetMeetings, StopMeetingsPolling} from '../../Actions/MeetingsActions';
import {Page} from '../../../Common/Page';

export function Meetings({meetings = [], goToMeeting, deleteMeeting, goToCreateMeeting, getMeetings, stopMeetingsPolling}) {
    useEffect(
        () => {
            getMeetings();
            return () => {
                stopMeetingsPolling();
            };
        },
        [getMeetings, stopMeetingsPolling]
    );

    return (
        <Page title='Meetings'>
            {meetings.map((meeting, index) =>
                <div key={index} className="uk-card uk-card-primary uk-card-body uk-margin-small" onClick={() => goToMeeting(meeting._id)}>
                    {meeting.name}
                    <button
                        className="uk-position-top-right uk-margin-small-right uk-margin-small-top"
                        data-uk-icon="icon: trash"
                        onClick={() => deleteMeeting(meeting._id)}>
                    </button>
                </div>
            )}

            <div className="uk-card uk-card-secondary uk-card-body uk-margin-bottom uk-text-center" onClick={goToCreateMeeting}>
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
        deleteMeeting: (meetingId) => dispatch(DeleteMeeting(meetingId)),
        goToCreateMeeting: () => dispatch(viewCreateMeeting()),
        stopMeetingsPolling: () => dispatch(StopMeetingsPolling())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meetings)
