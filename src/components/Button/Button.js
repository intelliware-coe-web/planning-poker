import React from 'react';
import './Button.scss';


function Button(props) {
    return (
        <button className="uk-button" type="button">{props.name}</button>
    );
}

export default Button;
