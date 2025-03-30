import React, { useEffect, useState } from 'react'


 export default function LoginForm (){
   useEffect(() => {
     document.title = "Login Form";
   })


    const [Email , setEmail] = useState("");
    const [Password , setPassword] = useState("");
    const [error , setError] = useState(false);
    const loginuser = () => {
        if(Email && Password)
        alert(`Welcome, ${Email}!`);
    if( !Password)
        setError(true);
    }


console.log(Email , Password);


  return (
    <div>
      LoginForm 
      <form >
        
        Email:<input value= {Email} onChange={(e) =>{setEmail(e.target.value,)} }/>
        <br />
        <br />
        <br />
        Password:<input  value={Password}onChange={(e) => {setPassword(e.target.value)}} />
        
        <br /><br />
        
        <button type="submit" onClick={() => {loginuser()}}>Login</button>
      </form>
    </div>
  )
}
