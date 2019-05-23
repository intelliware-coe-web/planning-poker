
import React from 'react';


function Card(props) {
    return(
        <div className="uk-card uk-card-primary uk-card-body uk-margin">
            <div className="uk-card-badge uk-label">
                {props.card.priority}
            </div>
            <h3 className="uk-card-title">{props.card.title}</h3>
            <p>{props.card.description}</p>
        </div>
    );
}

export default Card;