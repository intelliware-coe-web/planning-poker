import React from 'react';
import {Link} from 'react-router-dom';

export default function AddMeetingButton() {
    return (
        <Link to="/meeting/add">
            <div className="uk-card uk-card-secondary uk-card-body add-card">
                <h3 className="uk-card-title">+</h3>
            </div>
        </Link>
    );
}