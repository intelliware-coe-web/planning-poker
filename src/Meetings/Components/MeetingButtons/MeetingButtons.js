import React from 'react';
import {Link} from 'react-router-dom';
import '../Meetings.css';
import {connect} from 'react-redux';
import {FindMeetings} from '../../Actions/MeetingsActions';

// const meetings = ['First', 'Second', 'Third', 'Fourth'];

function MeetingButtons({meetings}) {
    if (meetings.length === 0) {
        return null;
    }
    return meetings.map((meeting, index) => 
        <div key={index}>
                <Link to="/host">
                    <div className="uk-card uk-card-secondary uk-card-body meeting-card">
                        <h3 className="uk-card-title">{meeting}</h3>
                    </div>
                </Link>
            <br/>
        </div>
    );
}

function mapStateToProps() {
    return {
    }
 }
 function mapDispatchToProps(dispatch) {
    return {
        meetings: () => dispatch(FindMeetings())
    };
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(MeetingButtons)