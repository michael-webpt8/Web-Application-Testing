import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';
import { getByTestId, fireEvent } from '@testing-library/react';

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

// test('clicking button Strike changes strikes from 0 to 1', () => {
//   const strikeCountUp = jest.fn();
//   const countUp = jest.fn();
//   const { getByText } = rtl.render(
//     <button onClick={strikeCountUp}>Strike</button>
//   );
//   fireEvent.click(getByText('Strike'));
//   expect(strikeCountUp).toHaveBeenCalledTimes(1);
//   expect(strikeCountUp).toHaveBeenCalledWith(1);
// });
