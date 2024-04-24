import { render, screen } from "@testing-library/react";
// import renderer from 'react-test-renderer';
import App from "./App";
// import Users from "./Users";

// test("hello bd", () => {
//   render(<App />);
//   const text = screen.getByText(/Hello Bangladesh/i);
//   expect(text).toBeInTheDocument();
// });

// getByLabelText
test("getByLabelText", () => {
  render(<App />);
  const input = screen.getByLabelText("UserName");
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("Kamal");
});

// test("getAllByRole", () => {
//   render(<App />);
//   const buttonAll = screen.getAllByRole("button");
//   // expect(buttonAll[0]).toBeInTheDocument();
//   for (let i = 0; i < buttonAll.length; i++) {
//     expect(buttonAll[i]).toBeInTheDocument();
//   }
// });

// test("getByRole testing", ()=>{
//   render (<App/>)
//   // multiget
//   const btn1 = screen.getByRole("button",{name:"Click One"})
//   const btn2 = screen.getByRole("button",{name:"Click Two"})
//   // single get
//   const input1 = screen.getByRole("textbox",{name: "User Name"})
//   // custom get
//   const div1 = screen.getByRole("dummy")

//   expect(btn1).toBeInTheDocument()
//   expect(btn2).toBeInTheDocument()
//   expect(input1).toBeInTheDocument()
//   expect(div1).toBeInTheDocument()
// })

// test("method testing case 2", ()=>{
//   expect(HelpHandle()).toMatch("hi")
// })

// test("class component method testing",()=>{
//   const componentData = renderer.create(<Users />)
//   expect(componentData.getUserList()).toMatch("user list")
// })

// test("snapshot for app component", () => {
//   const container = render(<App />);
//   expect(container).toMatchSnapshot();
// });

// Click event test case with button:::
// test("Click event test case with button", () => {
//   render(<App />);
//   const btn = screen.getByRole("button");
//   fireEvent.click(btn);
//   expect(screen.getByText("Hello Bangladesh")).toBeInTheDocument();
// });

// onchange testing ::
// test("checkBox onchange",()=>{
//   render(<App />);
//    let input = screen.getByRole("textbox");
//    fireEvent.change(input,{target:{value:"ab"}})
//    expect(input.value).toBe("abtest")

// })

// test("for text-box", () => {
//   render(<App />);
//   let inputBox = screen.getByRole("textbox");
//   let inputPlaceHolder = screen.getByPlaceholderText("Type Something");
//   expect(inputBox).toBeInTheDocument();
//   expect(inputPlaceHolder).toBeInTheDocument();
//   expect(inputBox).toHaveAttribute("name", "username");
//   expect(inputBox).toHaveAttribute("id", "userId");
//   expect(inputBox).toHaveAttribute("type", "text");
//   expect(inputBox).toHaveAttribute("value", "kamal");

// });

// group test-----------------------------------

// describe("UI test case group", () => {
//   test("case 1", () => {
//     render(<App />);
//     let inputBox = screen.getByRole("textbox");
//     expect(inputBox).toHaveAttribute("name", "username");
//   });
//   test("case 2", () => {
//     render(<App />);
//     let inputBox = screen.getByRole("textbox");
//     expect(inputBox).toHaveAttribute("name", "username");
//   });
//   test("case 3", () => {
//     render(<App />);
//     let inputBox = screen.getByRole("textbox");
//     expect(inputBox).toHaveAttribute("name", "username");
//   });
// });
// describe.only("API test case group", () => {
//   test("case 1", () => {
//     render(<App />);
//     let inputBox = screen.getByRole("textbox");
//     expect(inputBox).toHaveAttribute("name", "username");
//   });
//   test("case 2", () => {
//     render(<App />);
//     let inputBox = screen.getByRole("textbox");
//     expect(inputBox).toHaveAttribute("name", "username");
//   });
//   test("case 3", () => {
//     render(<App />);
//     let inputBox = screen.getByRole("textbox");
//     expect(inputBox).toHaveAttribute("name", "username");
//   });
// });
