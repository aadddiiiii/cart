import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRouter = ({ children }) => {
  const authToken = localStorage.getItem("key");
  
  console.log("Auth Token:", authToken); // Single log for debugging

  if (!authToken) { // Convert to boolean check
    return children; 
  }

  return <Navigate to="/" replace />;
};

  

