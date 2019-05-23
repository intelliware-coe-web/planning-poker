
import React from 'react';


function Card(props) {
    return(
        <div class="uk-card uk-card-primary uk-card-body uk-margin">
            <div class="uk-card-badge uk-label">
                {props.card.priority}
            </div>
            <h3 class="uk-card-title">{props.card.title}</h3>
            <p>{props.card.description}</p>
        </div>
    );
}

export default Card;