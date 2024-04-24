// import { useState } from "react";
import "./App.css";
// import HelpHandle from "./Helper";
// import Users from "./Users";

function App() {
  // const [data, setData] = useState("")
  return (
    <div className="App">
      <p>Hello Bangladesh</p>
      {/* <p>Test on Change </p> */}
      {/* <input type="text" value={data} onChange={(e)=>{setData(e.target.value + "test")}} /> */}
      {/* <button onClick={()=>setData("Hello Bangladesh")} >Click here</button>
      <h3>{data}</h3>
       <button onClick={HelpHandle} >print click</button>
      <Users /> */}
      {/* GET By Role */}
      {/* <div>
           <button>Click One</button>
           <button>Click two</button>
           <label htmlFor="input1">User Name</label>
           <input type="text" name="input1" />
            <div role="dummy">
              Dummy Text
            </div>
      </div> */}
      {/* get By All
      <div>
          <button>Click </button>
          <button>Click </button>
          <button>Click </button>
      </div> */}
      <div>
        getByLabelText
        <label htmlFor="user-name">UserName</label>
        <input type="text" id="user-name" defaultValue={"Kamal"} />
      </div>
    </div>
  );
}

export default App;
