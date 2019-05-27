import Ticket from "./Ticket";
import React from 'react';
import renderer from 'react-test-renderer';

it('Ticket renders correctly', () => {
    const ticket = renderer.create(<Ticket/>).toJSON();
    expect(ticket).toMatchSnapshot();
});