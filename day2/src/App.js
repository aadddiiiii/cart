import React from 'react';
import './App.css';
import {Firstcomp} from './Firstcomp';

async function getData() {

  const url = "https://run.mocky.io/v3/1817f16e-bb2a-4c01-ab6b-8afe8f4de16a";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error( `Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json , "data");
  } catch (error) {
    console.error(error.message);
  }
}

export default function App() {
  getData();
  return (
    <div className="App">
      <Firstcomp/>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Firstcomp/>
//     </div>
//   );
// }
