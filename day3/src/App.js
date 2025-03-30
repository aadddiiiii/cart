import React from "react";
// import Component from "./components/Firstcomp";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState(""); // state varibale
  const [count, setCount] = useState(0);
  const[name , setname] = useState("false");
  useEffect(() => {
   alert("hello");
  }, [count]);

  async function getData() {
    const url = "https://run.mocky.io/v3/1817f16e-bb2a-4c01-ab6b-8afe8f4de16a";
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

  return (
    <div className="firstcomp">
      {/* <Component name="Aditya" data={data} /> */}
      <button onClick={() => {setCount(count + 1); }}> click {count} </button>
    {setname ? <h1>hello</h1> : <h1>bye</h1>}
<button onClick={() => {setname(!name); }}>click</button>


    </div>
  );
}

export default App