import React, {useState} from 'react';

export default function Ticket() {

    const [ticketNumber, setTicketNumber] = useState('');

    function handleChange(e){
        setTicketNumber(e.target.value);
    }

    return (
        <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                <h1 className="uk-heading-small uk-text-center">Add a Ticket</h1>
                <input placeholder="Ticket #" className="uk-input uk-margin uk-width-1-2@m uk-align-center" onChange={handleChange}></input>
                <a href="#/host/" className="uk-width-1-2@m uk-align-center">
                    <button className="uk-button uk-button-primary uk-width-1-1@m" disabled={'' === ticketNumber}>CREATE</button>
                </a>
            </div>
        </div>
    );
};