import CreateUser from "./CreateUser";
import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import store from '../store';

const storeConfig = store();

it('CreateUser renders correctly', () => {
    const createUser = renderer.create(<Provider store={storeConfig}><CreateUser/></Provider>).toJSON();
    expect(createUser).toMatchSnapshot();
});