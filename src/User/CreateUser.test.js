import CreateUser from "./CreateUser";
import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(
    {
        user: {
            items: null,
            error: null,
            loading: false
        }
    });

it('CreateUser renders correctly', () => {
    const createUser = renderer.create(<Provider store={store}><CreateUser/></Provider>).toJSON();
    expect(createUser).toMatchSnapshot();
});