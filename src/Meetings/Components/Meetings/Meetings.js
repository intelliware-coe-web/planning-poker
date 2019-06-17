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
                <div key={index} data-uk-grid>
                    <div className="uk-width-5-6">
                        <div className="uk-card uk-card-primary uk-card-body"
                             onClick={() => goToMeeting(meeting._id)}>
                            {meeting.name}
                        </div>
                    </div>
                    <div className="uk-flex uk-flex-middle uk-width-1-6">
                        <button
                            className="uk-icon-button pp-delete-button"
                            data-uk-icon="icon: trash"
                            onClick={() => deleteMeeting(meeting._id)}>
                        </button>
                    </div>
                </div>
            )}

            <div className="uk-card uk-card-secondary uk-card-body uk-margin-bottom uk-margin-top uk-text-center"
                 onClick={goToCreateMeeting}>
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
