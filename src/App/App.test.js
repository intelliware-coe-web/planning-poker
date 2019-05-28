import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
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

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  expect(App()).toMatchSnapshot(); 
});
