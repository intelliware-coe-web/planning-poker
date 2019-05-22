import React from 'react';

function EmailInput(props) {
    return (
        <div className="uk-margin">
            <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon: mail"></span>
                <input className="uk-input" type="email" placeholder="Email" />
            </div>
        </div>
    );
}

export default EmailInput;