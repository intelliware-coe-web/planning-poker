import React from 'react';

export default function Host() {
    
    var alphabets = "ABCD";

    return (
        <div className="uk-flex uk-flex-column uk-flex-middle">
            <h1 className="uk-heading-medium uk-margin-top">HOST</h1>
            { Array.from(alphabets).map((letter,i) => 
                <button key={i} className="uk-margin uk-button-secondary uk-button-large uk-width-1-6 uk-text-large">Story {letter}</button>)
            }
            <button className="uk-margin uk-button-secondary uk-button-large uk-width-1-6 uk-text-large">+</button>
        </div>
    );
}