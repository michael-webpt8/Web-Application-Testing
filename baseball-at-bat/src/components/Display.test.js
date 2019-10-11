import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

test('Strike found on board', () => {
  const wrapper = rtl.render(<Display />);
  const element = wrapper.getByText(/strike/i);
  expect(element).toBeVisible();
});

test('Ball found on board', () => {
  const wrapper = rtl.render(<Display />);
  const element = wrapper.getByText(/ball/i);
  expect(element).toBeVisible();
});
