import {CreateUser} from './CreateUser';
import React from 'react';

describe('Container: User', () => {
    it('should render CreateUser correctly', () => {
        const dispatches = {
            goToMeetings: jest.fn()
        };

        const state = {
            user: {
                name: 'Mock User'
            },
            error: null
        };

        expect(CreateUser({...dispatches, ...state})).toMatchSnapshot();
    });
});