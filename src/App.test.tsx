import React from 'react';
import { render, screen } from '@testing-library/react';
import {App} from './components/App';
import { storeState } from './reducers';
import { Todo } from './actions';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


