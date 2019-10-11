import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';
import { fireEvent, getByText } from '@testing-library/react';

afterEach(rtl.cleanup);

test('Strike button is pressed once', () => {
  const { getByText } = rtl.render(<Dashboard />);
  const rightClick = { button: 2 };
  fireEvent.click(getByText(/strike/i), rightClick);
});

test('Ball button is pressed once', () => {
  const { getByText } = rtl.render(<Dashboard />);
  const rightClick = { button: 2 };
  fireEvent.click(getByText(/ball/i), rightClick);
});

test('Foul button is pressed once', () => {
  const { getByText } = rtl.render(<Dashboard />);
  const rightClick = { button: 2 };
  fireEvent.click(getByText(/foul/i), rightClick);
});

test('hit button is pressed once', () => {
  const { getByText } = rtl.render(<Dashboard />);
  const rightClick = { button: 2 };
  fireEvent.click(getByText(/hit/i), rightClick);
});
