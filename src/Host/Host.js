import React from 'react';

export default function Host() {
    
    var alphabets = "ABCD";

    return (
        <div className="uk-flex uk-flex-column uk-flex-middle uk-width-1-1">
            <h1 class="uk-heading-line uk-text-center uk-margin-large-top uk-margin-large-bottom">
                <span>Host</span>
            </h1>

            { Array.from(alphabets).map( (letter,i) => 
                <button key={i} className="uk-margin uk-button-secondary uk-width-1-2 uk-text-large">
                    <div class="uk-card uk-card-secondary uk-card-body">
                        <div class="uk-card-badge uk-label">Points: 3</div>
                        <h3 class="uk-card-title">Story {letter}</h3>
                    </div>
                </button>
                )
            }


                <button className="uk-margin uk-button-secondary uk-width-1-2 uk-text-large">
                    <div class="uk-card uk-card-secondary uk-card-body">
                        <h3 class="uk-card-title">+</h3>
                    </div>
                </button>
        </div>
    );
}