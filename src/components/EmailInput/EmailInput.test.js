import React from 'react';
import EmailInput from './EmailInput';

it('email input should match snapshot', () => {
    expect(EmailInput()).toMatchSnapshot();
});