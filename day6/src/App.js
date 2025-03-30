// import React from 'react';
// import './App.css';
import LoginForm from "./Loginform/Loginform";
// import React, { useState } from "react";

export default function App() {

  return (
    <div className="flex justify-center items-center h-screen">
      <LoginForm />
    </div>
  );






  // State for storing user input
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("User Logged In:", formData);
//     alert(`Welcome, ${formData.email}!`);
//   };
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-xl">
//         <h2 className="text-xl font-bold mb-4">Login</h2>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="block w-full p-2 mb-3 border border-gray-300 rounded-md"
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           className="block w-full p-2 mb-3 border border-gray-300 rounded-md"
//         />

//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
//           Login
//         </button>
//       </form>
//     </div>
//   );
}


// export default App;
