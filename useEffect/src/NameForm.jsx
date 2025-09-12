import React from 'react'
import { useState } from 'react';

export default function NameForm() {

    const[name, setName] = useState('');



  return (
    <div>
        <input type="text" placeholder='Enter your name' onBlur={(e)=>setName(e.target.value)}/>
        <h3>Welcome: {name}</h3>
    </div>
  )
}
