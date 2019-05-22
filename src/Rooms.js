import React from 'react';

export default class Rooms extends React.Component {
    
    render() {
        var alphabet = "ABCD";
        return (
            <div className="uk-flex uk-flex-column uk-flex-middle">
                <h1 className="uk-heading-medium uk-margin-top">ROOM</h1>
                { Array.from(alphabet).map(letter => <button className="uk-margin uk-button-secondary uk-button-large uk-width-1-6 uk-text-large">{letter}</button>) }
            </div>
        );
    }
}