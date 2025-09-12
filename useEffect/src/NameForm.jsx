import React from 'react'
import { useState, useEffect} from 'react';

export default function NameForm() {

    const[name, setName] = useState('');
    const[click, setClick] = useState();

    useEffect(()=>{
        console.log("Component mounted");

        return(()=>{
            console.log("Component unmounted");
        })
    },[click]) 

    /* 
    In development mode only (not production!), 
    Strict Mode makes React do an extra cycle of mount → unmount → mount.
    that's why it renders twice in the console.
    */



  return (
    <div>
        <input type="text" placeholder='Enter your name' onBlur={(e)=>setName(e.target.value)}/>
        <button onClick={()=>setClick(name)}>Submit</button>
        <h3>Welcome: {name}</h3>
    </div>
  )
}


/* 
Input saves the typed value into name (but only when you leave the input).
Button copies that name into another state click.
Useful if you want to separate typing from official submission.

//no need to use click state, my head is fucked up rn lol
*/
