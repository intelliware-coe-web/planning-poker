import React from 'react';
import { Link } from "react-router-dom";

export default function Host() {
    
    var alphabets = "ABCD";

    return (
        <>
        <div className="uk-container uk-text-center@m uk-margin-top">
            <h1 className="uk-heading-small uk-heading-divider">Host</h1>
            <div className="uk-flex uk-flex-column uk-flex-middle uk-width-1-1">
                <Link to="/estimate"><button className="uk-button uk-button-primary uk-button-small uk-position-small uk-position-top-right">Estimate</button></Link>

                { Array.from(alphabets).map( (letter,i) => 
                    <button key={i} className="uk-margin uk-button-primary uk-width-1-2 uk-text-large">
                        <div className="uk-card uk-card-primary uk-card-body">
                            <div className="uk-card-badge uk-label">Points: 3</div>
                            <h3 className="uk-card-title">Story {letter}</h3>
                        </div>
                    </button>
                    )
                }

                <button className="uk-margin uk-button-secondary uk-width-1-2 uk-text-large">
                    <div className="uk-card uk-card-secondary uk-card-body">
                        <h3 className="uk-card-title">+</h3>
                    </div>
                </button>
            </div>
        </div>
        </>
    );
}