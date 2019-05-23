import React from 'react';

export default function Rooms() {
    
    var alphabets = "ABCD";
    return (
        <div className="uk-flex uk-flex-column uk-flex-middle">
            <h1 className="uk-heading-medium uk-margin-top">ROOM</h1>
            { Array.from(alphabets).map((letter,i) => 
                <button key={i} className="uk-margin uk-button-secondary uk-button-large uk-width-1-6 uk-text-large">{letter}</button>)
            }
        </div>
    );
}