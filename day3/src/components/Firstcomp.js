import React, { useState } from "react";
export const Firstcomp = (props) => {
    console.log(props, "props");
    
    return (
        <div>
           { <h2>Name: {props.name}</h2>}
           {props?.data?.map((val) => {
               <p>Name: {val.name}</p>
           })}
        </div>
    );
};




export default Firstcomp;
