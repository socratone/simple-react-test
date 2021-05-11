import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { server } from '../mocks/server';
import ApiMockup from './ApiMockup';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('인풋에 데이터를 넣고 클릭 했을 때 올바른 데이터를 받아야 한다.', async () => {
  render(<ApiMockup />);
  fireEvent.change(screen.getByRole('textbox'), { target: { value: '1' } });
  fireEvent.click(screen.getByText('클릭'));
  await waitFor(() => screen.getByText('이정도'));
  
  fireEvent.change(screen.getByRole('textbox'), { target: { value: '2' } });
  fireEvent.click(screen.getByText('클릭'));
  await waitFor(() => screen.getByText('김재완'));
  
  fireEvent.change(screen.getByRole('textbox'), { target: { value: '3' } });
  fireEvent.click(screen.getByText('클릭'));
  await waitFor(() => screen.getByText('김성은'));
});
