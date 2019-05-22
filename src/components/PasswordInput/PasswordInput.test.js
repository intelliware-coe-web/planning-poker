import React from 'react';
import PasswordInput from './PasswordInput';

it('password input should match snapshot', () => {
    expect(PasswordInput()).toMatchSnapshot();
});