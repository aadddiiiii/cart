import { createContext } from "react";
export const MyContext=createContext({
data:[], //for array
addExpense:()=>{}, //call that array
setData:()=>{} ,//delete ke liye bnaya
setEdit:()=>{}
});