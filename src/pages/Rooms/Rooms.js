import React from 'react';
import './Rooms.scss'

function Rooms() {
    return (
        <div className="rooms">
            <p className="test">Choose a Room!</p>
            <button className="uk-button uk-width-1-1" type="button">A</button>
            <button className="uk-button uk-width-1-1" type="button">B</button>
            <button className="uk-button uk-width-1-1" type="button">C</button>
            <button className="uk-button uk-width-1-1" type="button">D</button>
            <button className="uk-button uk-width-1-1" type="button">E</button>
            <button className="uk-button uk-width-1-1" type="button">F</button>
            <button className="uk-button uk-width-1-1" type="button">G</button>
            <button className="uk-button uk-width-1-1" type="button">+</button>
        </div>
    );
}

export default Rooms;