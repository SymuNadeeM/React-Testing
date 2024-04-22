import { render, screen } from '@testing-library/react';
import App from './App';

test('hello bd', () => {
  render(<App />);
  const text = screen.getByText(/Hello Bangladesh/i);
  expect(text).toBeInTheDocument();
});

test('for text-box', () => {
  render(<App />);
  let inputBox = screen.getByRole("textbox")
  let inputPlaceHolder = screen.getByPlaceholderText("Type Something")
  expect(inputBox).toBeInTheDocument()       
  expect(inputPlaceHolder).toBeInTheDocument()    
  expect(inputBox).toHaveAttribute('name',"username")  
  expect(inputBox).toHaveAttribute('id',"userId")  
  expect(inputBox).toHaveAttribute('type',"text")   
  expect(inputBox).toHaveAttribute('value',"kamal")   
});
