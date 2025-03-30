
import React, { useState } from "react";
import "./App.css";
import { MyContext } from "./Components/Context"; 
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseTable from "./Components/ExpenseTable";

const App = () => {
  // const [data, setData] = useState([]); 
  const [data, setData] = useState(''); 
const [count,setCount]=useState(0);
const [edit, setEdit] = useState(null);
  const addExpense = (expense) => {
   setCount( count , setData([...data, { ...expense, id: Date.now() },]))
    // setEdit(data)
  };

  return (
    <MyContext.Provider value={{ data, addExpense, setEdit,setData }}>
      <div>
        <ExpenseForm  /> 
        {/* Pass function as prop  */}
        <ExpenseTable /> 
      </div>
    </MyContext.Provider>
  );
};

export default App;