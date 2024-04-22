import { render, screen } from '@testing-library/react';
import App from './App';

test('hello bd', () => {
  render(<App />);
  const text = screen.getByText(/Hello Bangladesh/i);
  expect(text).toBeInTheDocument();
});
