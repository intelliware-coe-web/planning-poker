import React from 'react';
import './CardList.css';
import Card from './Card';

function CardList(props) {
    return (
        <div className="card-list">
            <div className="card-list-container uk-align-center">

                {props.listItems.map(function (listItem) {
                    return (
                    <Card card={listItem} />
                    );
                })}
                
            </div>
        </div>
    );
}

export default CardList;