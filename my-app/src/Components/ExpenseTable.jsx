import React, { useContext } from "react";
import { MyContext } from "./Context";
// import { useState } from "react";
const ExpenseTable = () => {
  const { data, setData ,setEdit} = useContext(MyContext);
  //   const [count, setCount] = useState(0);
  // setCount(count+1)
  // console.log(data, "new data");
  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((exp) => exp.id !== id));
  };
  const handleEdit = (expense) => {
    setEdit(expense); // Set the selected expense for editing
  };
  return (
    <div>
      ExpenseTable
      <table border={"2px"} cellPadding={"30px"}>
        <thead>
          <tr>
            <th>Item name</th>
            <th>Item price</th>
            <th> date</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((exp) => (
              <tr key={exp.id}>
                <td>{exp.name}</td>
                <td>
                  ${exp.price}
                  <button
                    style={{ margin: "10px" }}
                    onClick={() => handleEdit(exp)}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDelete(exp.id)}>Delete</button>
                </td>
                <td>{new Date().toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" align="center">
                No expenses added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;