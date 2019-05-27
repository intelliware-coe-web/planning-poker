import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from '../store';

const storeConfig = store();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <Provider store={storeConfig}>
        <App />
      </Provider>,
      div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  expect(App()).toMatchSnapshot(); 
});
