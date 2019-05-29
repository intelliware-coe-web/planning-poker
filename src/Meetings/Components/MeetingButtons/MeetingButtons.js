import React from 'react';
import {Link} from 'react-router-dom';
import '../Meetings.css';
import {connect} from 'react-redux';
import {FindMeetingsAction} from '../../Actions/MeetingsActions';

export function MeetingButtons({meetings, findMeetings}) {
    findMeetings();    
    return meetings.map((meeting, index) => 
        <div key={index}>
                <Link to="/host">
                    <div className="uk-card uk-card-secondary uk-card-body meeting-card">
                        <h3 className="uk-card-title">{meeting.name}</h3>
                    </div>
                </Link>
            <br/>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        meetings: state.meetings.list
    }
 }
 function mapDispatchToProps(dispatch) {
    return {
        findMeetings: () => dispatch(FindMeetingsAction())
    };
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(MeetingButtons)