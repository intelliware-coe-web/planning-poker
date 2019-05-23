import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/Card';

it('renders Card component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card card={{priority: 'high', title: 'test', descrption: 'a'}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});