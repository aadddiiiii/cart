
// import Firstcomp from './Component/Firstcomp'
// import Firstchild from './Component1/Firstchild'

//  function App() {

//   const styles = {
//     border: "1px solid black",
//     margin: "50px 50px 50px 50px",
//     padding: "50px 50px 50px 50px",
//   };
//   return (
//     <div style={styles}>
      
//       <h1>hello i'm aditya</h1>
//       <Firstcomp style={styles}/>
//       <Firstchild style={styles} name="aditya" age="20"/>
    
//     </div>
//   )
// }
// export default App

import React from "react";
import "./app.css";
import MyListOne from "./MyListOne/one";
import MyListTwo from "./MyListTwo/two";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState();
  const [count, setCount] = useState("");
  const [refVariable, setRefVariable] = useState(false);
  const [refVariable1, setRefVariable1] = useState(false);
  const [refVariable2, setRefVariable2] = useState(false);
  useEffect(() => {
    getData();
  }, [count]);

  async function getData() {
    const url = "https://run.mocky.io/v3/1a5e3b1f-78af-40ee-80ee-9648c2bec9ee";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json, "json");
      setData(json);
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  // console.log(data, "data");
  console.log(refVariable, "refVariable");
  return (
    <div className="one">
      <MyListOne name="nikita" data={data} />
      <MyListTwo data={data} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>

      <button
        onClick={() => {
          setRefVariable(!refVariable);
        }}
      >
        show data
      </button>




      <div onClick={() => setRefVariable1(!refVariable1)}>
        {refVariable1 ? (
          <div>
            <p>sharma</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-up-fill"
              viewBox="0 0 16 16"
            >
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
          </div>
        ) : (
          <div>
            <p>nikita</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </div>
        )}
      </div>




      <div onClick={() => setRefVariable2(!refVariable2)}>
      <h1>Conditional Rendering in React</h1>
        {refVariable2 ? (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-up-fill"
              viewBox="0 0 16 16"
            >
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
         
          <p>
              Conditional rendering in React means rendering different UI
              elements based on conditions. This allows your app to dynamically
              change what is displayed without reloading the page
            </p>
        </div>
        ) : (
          
           
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-caret-down-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
        )}
      </div>
    </div>
  );
}

export default App;
// single state of truth
// redux high scale, state management library
// context api small scale application internal flow ko manage krne ke liye, feature of react
// state:is a instance of your app. specified data aata hai for perticular amount of time(change hota rehta hai data)
// usi satet ko manage krte hai redux and context api
// props dealing