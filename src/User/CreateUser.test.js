import CreateUser from './CreateUser';
import React from 'react';
import renderer from 'react-test-renderer';

describe('CreateUser', () => {
    it('renders correctly', () => {
        const createUser = renderer.create(<CreateUser/>).toJSON();
        expect(createUser).toMatchSnapshot(); 
    });
});
