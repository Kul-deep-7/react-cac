import React from 'react'
import { useState } from 'react';
import NameForm from './NameForm';

export default function toggleformUseEffect() {

  const [showform, setShowform] = useState(false);

    const toggleform = () =>{
        setShowform(!showform);
    }

    /* 
    Every time toggleform is called, it flips showform.
    If the form is showing → it hides it.
    If the form is hidden → it shows it.
    */

  return (
    <div>
        <h1>Component lifecycle</h1>
        <div >Please provide your name to begin with: <button onClick={toggleform}>Add Name</button></div> <br />
        {showform && <NameForm />}
    </div>
  )
}
