import React, { useState } from 'react'

export default function EvenOddPalindrome() {
    const [number,setNumber] = useState("")
    const [string, setString] = useState("")
    const [msg , setMsg]= useState("")
    
    function OddEven(){
        if(number % 2 ===0){
            setMsg("Even Number")
        }else{
            setMsg("Odd Number")
        }
    }

    function palindrome(){
        let rev = string.split("").reverse().join("")
        if(rev === string){
            setMsg("Palindrome")
        }else{
            setMsg("Not a Palindrome")
        }
    }

  return (
    <div>
        <h2>Even Odd Number</h2>
        <input type="number"  onChange={(e)=>setNumber(e.target.value)} placeholder='Enter a number' /> <br />
        <button onClick={OddEven}>Check</button><br /><br />

{/* When you type in the input, onChange updates your state (setNumber). React doesn’t force you to bind value.

Without value → Uncontrolled input. The input keeps its own state (the browser manages what’s inside).
You can still read the value with onChange, but React isn’t in full control.
2. With value → Controlled input

In Palindrome, the input’s value is always whatever React state says.
React fully controls what’s shown inside the input.
More reliable, especially if you want to clear/reset it later with setNumber("").
*/}

        <h2>Palindrome Check</h2>
        <input type="text" value={string} onChange={(e)=>setString(e.target.value)} placeholder='Enter a string' /> <br />
        <button onClick={palindrome}>Palindrome</button>
        <br /><br />
        <p>{msg}</p>
    </div>
  )
}
