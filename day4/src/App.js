import { useState } from "react";
import Page1 from "./Components/Pages/Page1";
import FirstContext from "./Context/Firstcontext";


// function data() {

//   const URL = "https://run.mocky.io/v3/1817f16e-bb2a-4c01-ab6b-8afe8f4de16a";

//   return fetch(URL)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((json) => {
//       return json;
//     })
//     .catch((error) => {
//       console.error(error.message);
//     });
// }


function App() {
  const style = {
    border: "1px solid black",
    margin: "50px 50px 50px 50px",
    padding: "50px 50px 50px 50px",
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const combineData = (fName, lName) => {
    setFirstName(fName);
    setLastName(lName);
    setEmail(
      `${fName} ${lName} - He/She is from India and above 18 years old.`
    );
  };

  return (
    <FirstContext.Provider value={{ firstName, lastName, email, combineData }}>
      <div style={style}>
        <h2>App</h2>
        <Page1 />
      </div>
    </FirstContext.Provider>
  );
}

export default App;