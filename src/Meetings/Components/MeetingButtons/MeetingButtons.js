import React from 'react';
import {connect} from 'react-redux';
import {GetMeetings} from '../../Actions/MeetingsActions';
import {viewMeeting} from '../../../Navigation/route-actions';

export function MeetingButtons(props) {
    props.getMeetings();    
    return props.meetings.map((meeting, index) => 
        <div key={index}>
            <div className="uk-card uk-card-secondary uk-card-body pp-button" onClick={event => GoToMeeting(event)}>
                <h3 className="uk-card-title">{meeting.name}</h3>
            </div>
            <br/>
        </div>
    );

    function GoToMeeting(event) {
        event.preventDefault();
        props.goToMeeting();
    }
}

function mapStateToProps(state) {
    return {
        meetings: state.meetings.list,
        error: state.meetings.error
    }
};
 
function mapDispatchToProps(dispatch) {
    return {
        getMeetings: () => dispatch(GetMeetings()),
        goToMeeting: () => dispatch(viewMeeting())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetingButtons)