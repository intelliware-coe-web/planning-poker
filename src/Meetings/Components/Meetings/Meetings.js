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
                <div key={index} className="uk-card uk-card-primary uk-card-body uk-margin-small" onClick={() => goToMeeting(meeting._id)}>
                    {meeting.name}
                    <button
                        className="uk-position-center-right uk-margin-small-right"
                        data-uk-icon="icon: trash"
                        onClick={() => deleteMeeting(meeting._id)}>
                    </button>
                </div>
            )}

            <div className="uk-card uk-card-secondary uk-card-body" onClick={goToCreateMeeting}>
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
        goToCreateMeeting: () => dispatch(viewCreateMeeting())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meetings)
