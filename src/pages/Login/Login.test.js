import React from 'react';
import Login from './Login';

it('login should match snapshot', () => {
    expect(Login()).toMatchSnapshot();
});