import React from 'react';
const alphabets = ['Meeting A', 'Meeting B', 'Meeting C', 'Meeting D', 'Meeting E'];

export default function Meetings() {
    
    return (
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                <h1 className="uk-text-center uk-heading-divider">MEETINGS</h1>                
                <div className="uk-flex uk-flex-column uk-flex-middle">
                    { alphabets.map((letter, index) => 
                        <button key={index} className="uk-margin uk-button-secondary uk-button-large uk-text-large">{letter}</button>
                    )}
                </div>
            </div>
        </div>
    );
}