import { render, screen } from "@testing-library/react";
import App from "./App";

test("hello bd", () => {
  render(<App />);
  const text = screen.getByText(/Hello Bangladesh/i);
  expect(text).toBeInTheDocument();
});

test("for text-box", () => {
  render(<App />);
  let inputBox = screen.getByRole("textbox");
  let inputPlaceHolder = screen.getByPlaceholderText("Type Something");
  expect(inputBox).toBeInTheDocument();
  expect(inputPlaceHolder).toBeInTheDocument();
  expect(inputBox).toHaveAttribute("name", "username");
  expect(inputBox).toHaveAttribute("id", "userId");
  expect(inputBox).toHaveAttribute("type", "text");
  expect(inputBox).toHaveAttribute("value", "kamal");
});

// group test-----------------------------------

describe("UI test case group", () => {
  test("case 1", () => {
    render(<App />);
    let inputBox = screen.getByRole("textbox");
    expect(inputBox).toHaveAttribute("name", "username");
  });
  test("case 2", () => {
    render(<App />);
    let inputBox = screen.getByRole("textbox");
    expect(inputBox).toHaveAttribute("name", "username");
  });
  test("case 3", () => {
    render(<App />);
    let inputBox = screen.getByRole("textbox");
    expect(inputBox).toHaveAttribute("name", "username");
  });
});
describe.only("API test case group", () => {
  test("case 1", () => {
    render(<App />);
    let inputBox = screen.getByRole("textbox");
    expect(inputBox).toHaveAttribute("name", "username");
  });
  test("case 2", () => {
    render(<App />);
    let inputBox = screen.getByRole("textbox");
    expect(inputBox).toHaveAttribute("name", "username");
  });
  test("case 3", () => {
    render(<App />);
    let inputBox = screen.getByRole("textbox");
    expect(inputBox).toHaveAttribute("name", "username");
  });
});