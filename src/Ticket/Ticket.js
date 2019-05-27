import React, {useState} from 'react';

export default function Ticket() {

    const [ticketNumber, setTicketNumber] = useState('');

    function handleChange(e){
        setTicketNumber(e.target.value);
    }

    return (
        <div className="uk-flex uk-flex-center">u
            <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                <a href="#/host/">
                    <span uk-icon="icon: arrow-left; ratio: 2"></span>
                </a>
                <input placeholder="Ticket #" className="uk-input uk-margin uk-width-1-2@m uk-align-center" onChange={handleChange}></input>
                <a href="#/host/" className="uk-width-1-2@m uk-align-center">
                    <button className="uk-button uk-button-primary uk-width-1-1@m" disabled={'' === ticketNumber}>CREATE</button>
                </a>
            </div>
        </div>
    );
};