import Meetings from "./Meetings";
import React from 'react';
import {Link} from 'react-router-dom';

const fixture = new Meetings();

it('Meetings renders correctly', () => {
    expect(fixture.render()).toMatchSnapshot(); 
});

it('Meeting should return span element', () => {
    fixture.meetings = [];
    expect(fixture.meetingButtons).toEqual(<span>No meetings scheduled</span>);
});

// it('Meeting should return button elements', () => {
//     fixture.meetings = ['A', 'B'];
//     let expecetdButtons = [<Link to="/" className="uk-margin uk-button-secondary uk-button-large uk-text-large">A</Link>, <Link to="/" className="uk-margin uk-button-secondary uk-button-large uk-text-large">B</Link>];
    
//     expect(fixture.meetingButtons.length).toBe(2);
//     expect(fixture.meetingButtons[0]).toBe(expecetdButtons[0]);
//     expect(fixture.meetingButtons[1]).toEqual(expecetdButtons[1]);
// });