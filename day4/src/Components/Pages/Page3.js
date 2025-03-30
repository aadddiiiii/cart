import { useContext } from "react";
import Firstcontext from "../../Context/Firstcontext";

function Page3() {

  const { firstName, lastName, email, combineData } = useContext(Firstcontext);
  const style = {
    border: "1px solid black",
    margin: "50px 50px 50px 50px",
    padding: "50px 50px 50px 50px",
  };
    return <div  style={style}>
    
    <button  onClick={() => {combineData("Aditya ","Thakur");
      console.log(firstName, lastName, email);
      
     }}>click me</button>
    
    
    
    </div>; 
 
  }
  
  export default Page3;