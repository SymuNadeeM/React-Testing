// import { render, screen } from "@testing-library/react";
// import renderer from 'react-test-renderer';
// import Users from "./Users";
import { render, screen } from "@testing-library/react";
import TestComponent from "./TestComponent";

// test("hello bd", () => {
//   render(<App />);
//   const text = screen.getByText(/Hello Bangladesh/i);
//   expect(text).toBeInTheDocument();
// });
// :::::::::::::::::::::::  Test component Props :::::::::::::::::::::::
test("component Props", () => {
  const name = "Green";
  render(<TestComponent name={name} />);
  const elements = screen.getByText(`The Color Name is ${name}`);
  expect(elements).toBeInTheDocument();
});

// ::::::::::::::::::::::: 02 act function :::::::::::::::::::::::
// state handle korte act function use kora hoy
// test("act function", async () => {
//   userEvent.setup();
//   render(<App />);
//   const el = screen.getByRole("textbox");
//   await act(async () => {
//     await userEvent.type(el, "appl");
//   });

//   expect(screen.getByText("appl")).toBeInTheDocument();
// });

// :::::::::::::::::::::::  01 onChange Event Testing | Keyboard Interactions:::::::::::::::::::::::
// test("onChange Event Testing | Keyboard Interactions", async ()=>{
//   userEvent.setup()
//   render(<App />);
//   const el =screen.getByRole("textbox")
//   await userEvent.type(el,"appl")
//   expect(screen.getByText("appl")).toBeInTheDocument()
// })

// :::::::::::::::::::::::   Click Event with User Event Library :::::::::::::::::::::::
// here need @testing-library/user-event update
// write: npm install @testing-library/user-event@latest
// test("Click Event with User Event Library", async () => {
//   userEvent.setup();
//   render(<App />);
//   const btn = screen.getByText("Click Me");
//   await userEvent.click(btn);
//   expect(screen.getByText("Bangladesh")).toBeInTheDocument();
// });

// :::::::::::::::::::::::   Querying Within Elements  :::::::::::::::::::::::
// using parent and child testing in one div

// test("Querying Within Elements",()=>{
//   render(<App />);
//   let el = screen.getByText("Country in South Asia")
//   let subEl = within(el).getByText("Bangladesh")
//   expect(el).toBeInTheDocument();
//   expect(subEl).toBeInTheDocument();
// })

// :::::::::::::::::::::::   Test Elements with JavaScript Query  :::::::::::::::::::::::
// test("Elements with JavaScript Query", () => {
//   render(<App />);
//   const element = document.querySelector("#testId");
//   expect(element).toBeInTheDocument();
//   expect(element).toHaveTextContent("Cloud Solution");
//   expect(element).toHaveAttribute("id");
// });

// :::::::::::::::::: findBy  :::::::::::::::::::::::
// test("findBy", async()=>{
//   render(<App />);
//   const dv = await screen.findByText("Data is Found",{},{timeout:4000})
//   expect(dv).toBeInTheDocument();
// })

// :::::::::::::::::: QueryBy  :::::::::::::::::::::::
// mainly used in hidden data

// test("QueryBy",()=>{
//   render(<App />);
//   const dv = screen.queryByText("LogIn")
//   expect(dv).not.toBeInTheDocument();
// })

// :::::::::::::::::: getBy  :::::::::::::::::::::::
// TextMatch with Function
// test("TextMatch with Function", () => {
//   render(<App />);
//   // const divText = screen.getByText((content, element) =>
//   //   content.startsWith("At")
//   // );
//   const divText = screen.getByText((content, element) =>
//     content.includes("rang")
//   );
//   // const divText = screen.getByText((content, element) =>
//   //   content.endsWith("At")
//   // );
//   expect(divText).toBeInTheDocument();
// });

//  TextMatch with String and Regex
// test("TextMatch with String",()=>{
//   render(<App />);
//   const text = screen.getByText("Hello world",{exact:false})
//   expect(text).toBeInTheDocument();
// })
// test("TextMatch with Regex",()=>{
//   render(<App />);
//   // const text = screen.getByText(/milk/)
//   // const text = screen.getByText(/lk te/)
//   const text = screen.getByText(/Milk/i)
//   expect(text).toBeInTheDocument();
// })

// getByAltText
// test("getByAltText",()=>{
//   render(<App />);
//   const imageAlt = screen.getByAltText("top-images")
//   expect(imageAlt).toBeInTheDocument();
// })

// // getByTitle
// test("getByTitle",()=>{
//   render(<App />);
//   const title = screen.getByTitle("Click")
//   expect(title).toBeInTheDocument();
// })

// getByDisplayValue
// test("getByDisplayValue testarea",()=>{
//   render(<App />);
//   const textarea = screen.getByDisplayValue("Bangladesh")
//   expect(textarea).toBeInTheDocument();
// })
// test("getByDisplayValue input",()=>{
//   render(<App />);
//   const input = screen.getByDisplayValue("love bd")
//   expect(input).toBeInTheDocument();
// })
// test("getByDisplayValue radio",()=>{
//   render(<App />);
//   const radio = screen.getByDisplayValue("male")
//   expect(radio).toBeInTheDocument();
// })

// getByTestId and getAllByTestId
// test("getByTestId and getAllByTestId",()=>{
//   render(<App />);
//   const text = screen.getByTestId("data-test-id")
//   expect(text).toBeInTheDocument();
// })

// test("getByPlaceholderText",()=>{
//   render(<App />);
//   const inputPlace= screen.getByPlaceholderText("Enter Your Dec")
//   expect(inputPlace).toBeInTheDocument();
//   expect(inputPlace).toHaveValue("Md.symun");
// })

// getAllByLabelText
// test("getAllByLabelText",()=>{
//   render(<App />);
//   const allInput = screen.getAllByLabelText("UserName")
//   for(let i=0;i<allInput.length; i++){
//     expect(allInput[i]).toBeInTheDocument();
//     expect(allInput[i]).toHaveValue("Kamal");
//   }

// })

// getByLabelText
// test("getByLabelText", () => {
//   render(<App />);
//   const input = screen.getByLabelText("UserName");
//   expect(input).toBeInTheDocument();
//   expect(input).toHaveValue("Kamal");
// });

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
