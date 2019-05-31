import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {GetMeetings} from '../../Actions/MeetingsActions';

export function MeetingButtons({meetings, error, getMeetings}) {
    getMeetings();    
    return meetings.map((meeting, index) => 
        <div key={index}>
                <Link to="/host">
                    <div className="uk-card uk-card-secondary uk-card-body pp-button">
                        <h3 className="uk-card-title">{meeting.name}</h3>
                    </div>
                </Link>
            <br/>
        </div>
    );
}

 function mapStateToProps(state) {
    return {
        meetings: state.meetings.list,
        error: state.meetings.error
    }
 };
 
 function mapDispatchToProps(dispatch) {
     return {
        getMeetings: () => dispatch(GetMeetings())
     }
 };
 
 export default connect(mapStateToProps, mapDispatchToProps)(MeetingButtons)