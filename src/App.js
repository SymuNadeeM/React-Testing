// import { useState } from "react";
import { useEffect, useState } from "react";
import "./App.css";
// import HelpHandle from "./Helper";
// import Users from "./Users";

function App() {
  // const [data, setData] = useState("")
  // let log = true  {QueryBy}
  const [data, setData] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setData(true)
    },3000)
  },[])
  return (
    <div className="App">
      <p>Hello Bangladesh</p>

       <div>
       ::::::::: findBy and findAllBy :::::::::
       {data ? <div>Data is Found</div> : <div>Data is NOT Found</div> }
       </div>

      {/* <div>
     :::::::::  QueryBy and QueryAllBy :::::::::::
      <br />
      {log ? <button>Logout</button> : <button>LogIn</button> }
      </div> */}


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
      {/* <div>
        getByLabelText
        <label htmlFor="user-name">UserName</label>
        <input type="text" id="user-name" defaultValue={"Kamal"} />
      </div> */}
      {/* <div>
        getAllByLabelText
        <br /><br /><br /><br />
        <label htmlFor="user-name1">UserName</label>
        <input type="text" id="user-name1" defaultValue={"Kamal"} />
        <br />
        <br />
        <label htmlFor="user-name2">UserName</label>
        <input type="text" id="user-name2" defaultValue={"Kamal"} />
        <br />
        <br />
        <label htmlFor="user-name3">UserName</label>
        <input type="text" id="user-name3" defaultValue={"Kamal"} />
      </div> */}
      {/* <div>
      getByPlaceholderText
      <input type="text" placeholder="Enter Your Dec" defaultValue={"Md.symun"} />
      </div> */}
      {/* <div>
        getByTestId and getAllByTestId
        <div data-testid="data-test-id">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eos
          modi atque aut debitis assumenda amet quidem, nesciunt totam
          consectetur blanditiis praesentium, illum voluptas ducimus commodi
          fugiat ut eius magni?
        </div>
      </div> */}
      {/* <div>
        getByDisplayValue
        <div>
           <textarea name="" id="" cols="30" rows="10" defaultValue={"Bangladesh"}></textarea>
           <br /> <br /> <br />
           <input type="text" defaultValue={"love bd"} />
           <input type="radio" defaultValue={"male"} />
        </div>
      </div> */}
      {/* <div>
      getByTitle
      <br /><br />
      <button title="Click">Click Me</button>
      </div> */}
      {/* <div>
        title
        <img
          src="https://www.istockphoto.com/photo/earth-globe-with-optical-fiber-cable-gm1606932279-530625658?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Flink%2F&utm_term=link"
          alt="top-images"
        />
      </div> */}
      {/* <div>
        TextMatch with String and Regex
        <br />
        <p>Hello woRld</p>
       <p>milk tea</p>
      </div> */}

      {/* <div>
        TextMatch with Function
        <br />
        <h3>At the end of the day orange</h3>
      </div> */}
      
    </div>
  );
}

export default App;
