import React from 'react';
import { Link } from "react-router-dom";

export default function Host() {
    
    var alphabets = "ABCD";

    return (
        <>
        <div className="uk-container uk-text-center@m uk-margin-top">
            <h1 className="uk-heading-small uk-heading-divider">Host</h1>
            <div className="uk-align-center uk-width-1-2@m">
                <Link to="/estimate"><button className="uk-button uk-button-primary uk-button-small uk-position-small uk-position-top-right">Estimate</button></Link>

                { Array.from(alphabets).map( (letter,i) => 
                    <button key={i} className="uk-button uk-margin-small-top uk-button-primary uk-width-1-1 uk-inline">
                        <div className="uk-card uk-card-primary uk-card-body">
                            <div className="uk-card-badge uk-label">Points: 3</div>
                            <h3 className="uk-card-title">Story {letter}</h3>
                        </div>
                    </button>
                    )
                }

                <button className="uk-button uk-margin-small-top uk-button-secondary uk-width-1-1 uk-inline">
                    <Link to="/ticket/">
                        <div className="uk-card uk-card-secondary uk-card-body">
                            <h3 className="uk-card-title">+</h3>
                        </div>
                    </Link>
                </button>
            </div>
        </div>
        </>
    );
}