import React from 'react';
import { Link } from "react-router-dom";
import './Host.css';

export default function Host() {
    
    var alphabets = "ABCD";

    return (
        <>
        <div className="default-background">
            <div className="uk-container uk-text-center@m">
                <h1 className="uk-heading-divider uk-margin-top">Host</h1>
                <div className="uk-align-center uk-width-1-2@m">
                    <a href="#/meetings/">
                        <span uk-icon="icon: arrow-left; ratio: 3" className="uk-position-large uk-position-top-left"></span>
                    </a>
                    <Link to="/estimate"><button className="uk-button uk-button-primary uk-button-small uk-position-small uk-position-top-right">Estimate</button></Link>

                    { Array.from(alphabets).map( (letter,i) =>
                            <div key={i} className="uk-card uk-card-secondary uk-card-body uk-margin ticket-card">
                                <Link to={{pathname:'/story/' + letter, query: {storyId: letter}}}>
                                    <div className="uk-card-badge uk-label">Points: 3</div>
                                    <h3 className="uk-card-title">Story {letter}</h3>
                                </Link>
                            </div>
                        )
                    }

                    <Link to="/ticket/">
                        <div className="uk-card uk-card-secondary uk-card-body add-card">
                            <h3 className="uk-card-title">+</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}