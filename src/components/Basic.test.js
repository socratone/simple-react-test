import { render, fireEvent, screen } from '@testing-library/react';
import Basic from './Basic';

it(`버튼을 클릭했을 때 '클릭됨'이 나타나야 한다.`, () => {
  render(<Basic />);
  // '클릭됨'이 없어야 한다.
  expect(screen.queryByText('클릭됨')).toBeNull();
  // '클릭'을 클릭한다.
  fireEvent.click(screen.getByText('클릭'));
  // '클릭됨' 글자가 있어야 한다.
  expect(screen.getByText('클릭됨'));
});
