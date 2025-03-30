import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

export const Firstnav = () => {
  const Navigate=useNavigate()
const logoutButton=()=>{
localStorage.clear()
Navigate("/")
}

  return (
    <div className='dis'>
<br /><br /><br /><br />
    <Link to="/home">Home</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/resource">Resource</Link>
    <Link to="/about">About</Link>
    <button onClick={logoutButton}>Logout</button>
    
    
    </div>
  )
}
