import React from 'react';
import { Link } from "react-router-dom";
import './Host.css';
import {connect} from 'react-redux';
import {MeetingActions, fetchTickets} from "../Actions/MeetingActions";

function Host(props) {
    
    var alphabets = "ABCD";

    if (props) {
        console.log(props);
    }

    return (
        <>
        <div className="default-background">
            <div className="uk-container uk-text-center@m">
                <h1 className="uk-heading-divider uk-margin-top">Host</h1>
                <div className="uk-align-center uk-width-1-2@m">
                    <a href="#/meetings/">
                        <span uk-icon="icon: arrow-left; ratio: 3" className="uk-position-large uk-position-top-left"></span>
                    </a>
                    <Link to="/estimate"><button className="uk-button uk-button-primary uk-button-small uk-position-small uk-position-top-right">Estimate</button></Link>
                    <button onClick={GetTickets}>Click to get tickets</button>

                    <ul>
                        {props.tickets.isArray ? props.tickets.map(ticket => <li>{ticket}</li>) : props.tickets.message}
                    </ul>

                    { Array.from(alphabets).map( (letter,i) =>
                            <div key={i} className="uk-card uk-card-secondary uk-card-body uk-margin ticket-card">
                                <Link to={{pathname:'/story/' + letter, query: {storyId: letter}}}>
                                    <div className="uk-card-badge uk-label">Points: 3</div>
                                    <h3 className="uk-card-title">Story {letter}</h3>
                                </Link>
                            </div>
                        )
                    }

                    <Link to="/ticket/">
                        <div className="uk-card uk-card-secondary uk-card-body add-card">
                            <h3 className="uk-card-title">+</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );

    function GetTickets() {
        props.dispatch(fetchTickets('5ceea1c4cd9e6bc7891f9c8b'));
        console.log("tickets retrieved: ",props.tickets);
    }
}

const MapStateToProps = state => ({
    tickets: state.meeting.tickets
});
 
export default connect(MapStateToProps)(Host) 