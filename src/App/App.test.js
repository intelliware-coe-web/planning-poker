import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
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
