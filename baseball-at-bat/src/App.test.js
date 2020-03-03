import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, getByText, getByTestId } from '@testing-library/react';

import App from './App';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

afterEach(rtl.cleanup);

test('Header is displayed', () => {
  const wrapper = rtl.render(<App />);
  const headerEl = wrapper.getByText(/baseball/i);
  expect(headerEl).toBeVisible();
});

test('increment strikes from 0 to 1', () => {
  // const { dash } = rtl.render(<Dashboard />);
  const { getByTestId } = rtl.render(<Display />);
  // const { app } = rtl.render(<App />);

  expect(getByTestId('strikeouts')).toHaveTextContent('0');
});
