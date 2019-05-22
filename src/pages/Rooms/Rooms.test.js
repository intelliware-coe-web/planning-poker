import React from 'react';
import Rooms from './Rooms';

it('rooms should match snapshot', () => {
    expect(Rooms()).toMatchSnapshot();
});