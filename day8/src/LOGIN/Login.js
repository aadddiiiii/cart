import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [loginValue, setLoginValue] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page refresh

    const AuthT = "aditya";
    localStorage.setItem("loginValue", loginValue);
    localStorage.setItem("key", AuthT);

    if (loginValue === AuthT) {
      navigate("/profile"); // Correct usage of navigate
    } else {
      alert("Invalid Username!"); // Show error message if username is incorrect
    }
  };

  return (
    <form className="formDesign" onSubmit={handleLogin}>
      <label className="custom">Enter your Details</label>
      <div className="logo"></div>
      <label>
        <h1>Login Form</h1>
      </label>
      <div>
        <label>Username: </label>
        <input
          type="text"
          placeholder="Enter your name"
          value={loginValue}
          onChange={(e) => setLoginValue(e.target.value)}
          required
        />
        <br />
        <br />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" placeholder="Enter your password" required />
        <br />
        <br />
      </div>
      <button type="submit">Log In</button>
      <div className="forget">
        <Link to="/signin">Sign In</Link>
      </div>
    </form>
  );
};
