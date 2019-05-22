import React from 'react';
import './Rooms.scss'
import Button from "../../components/Button";

function Rooms() {
    return (
        <div className="rooms">
            <p className="test">Choose a Room!</p>
            <Button name={'A'}/>
            <Button name={'B'}/>
            <Button name={'C'}/>
            <Button name={'D'}/>
            <Button name={'E'}/>
            <Button name={'F'}/>
            <Button name={'G'}/>
            <Button name={'+'}/>
        </div>
    );
}

export default Rooms;