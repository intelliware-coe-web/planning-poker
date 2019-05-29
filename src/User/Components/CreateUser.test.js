import CreateUser from './CreateUser';
import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore(
    {
        user: {
            user: null,
            error: null
        }
    });

describe('CreateUser', () => {
    it('renders correctly', () => {
        const createUser = renderer.create(<Provider store={store}><CreateUser/></Provider>).toJSON();
        expect(createUser).toMatchSnapshot();
    });
});