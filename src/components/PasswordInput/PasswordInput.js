import React from 'react';

function PasswordInput(props) {
    return (
        <div className="uk-margin">
            <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon: lock"></span>
                <input className="uk-input" type="password" placeholder="Password" />
            </div>
        </div>
    );
}

export default PasswordInput;