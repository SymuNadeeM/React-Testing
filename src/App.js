import { useState } from "react";
import "./App.css";
import HelpHandle from "./Helper";
import Users from "./Users";

function App() {
  const [data, setData] = useState("")
  return (
    <div className="App">
      <p>Hello Bangladesh</p>
      <p>Test on Change </p>
      {/* <input type="text" value={data} onChange={(e)=>{setData(e.target.value + "test")}} /> */}
      <button onClick={()=>setData("Hello Bangladesh")} >Click here</button>
      <h3>{data}</h3>
       <button onClick={HelpHandle} >print click</button>
      <Users />
    </div>
  );
}

export default App;
