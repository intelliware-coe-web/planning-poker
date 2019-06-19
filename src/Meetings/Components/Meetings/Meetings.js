import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {viewCreateMeeting, viewMeeting} from '../../../Navigation/route-actions';
import {DeleteMeeting, StartPollingMeetings, StopPollingMeetings} from '../../Actions/MeetingsActions';
import {Page} from '../../../Common/Page';

export function Meetings({meetings = [], startPollingMeetings, stopPollingMeetings, deleteMeeting, goToMeeting, goToCreateMeeting}) {
    useEffect(
        () => {
            startPollingMeetings();
            return () => {
                stopPollingMeetings();
            };
        },
        [startPollingMeetings, stopPollingMeetings]
    );

    return (
        <Page title='Meetings'>
            {meetings.map((meeting, index) =>
                <div key={index} className="uk-card uk-card-primary uk-card-body uk-margin-top"
                     onClick={() => goToMeeting(meeting._id)}>
                    <div className="uk-flex uk-flex-middle" data-uk-grid>
                        <div className="uk-width-5-6">
                            <span className="">{meeting.name}</span>
                        </div>
                        <div className="uk-padding-remove-left uk-flex uk-flex-right uk-width-1-6">
                            <button
                                className="uk-icon-button"
                                data-uk-icon="icon: trash"
                                uk-tooltip="title: Delete Meeting"
                                onClick={event => {
                                    event.stopPropagation();
                                    deleteMeeting(meeting._id);
                                }}>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="uk-align-center uk-flex uk-flex-center">
                <button
                    className="uk-icon-button"
                    data-uk-icon="icon: plus"
                    uk-tooltip="title: Add Meeting"
                    onClick={goToCreateMeeting}>
                </button>
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
        startPollingMeetings: () => dispatch(StartPollingMeetings()),
        stopPollingMeetings: () => dispatch(StopPollingMeetings()),
        deleteMeeting: (meetingId) => dispatch(DeleteMeeting(meetingId)),
        goToMeeting: (meetingId) => dispatch(viewMeeting(meetingId)),
        goToCreateMeeting: () => dispatch(viewCreateMeeting())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meetings)
