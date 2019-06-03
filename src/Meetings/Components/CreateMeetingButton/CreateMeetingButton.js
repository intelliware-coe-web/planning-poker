import React from 'react';
import {Link} from 'react-router-dom';

export default function CreateMeetingButton() {
    return (
        <Link to="/meeting/create">
            <div className="uk-card uk-card-secondary uk-card-body pp-secondary-button">
                <h3 className="uk-card-title">+</h3>
            </div>
        </Link>
    );
}