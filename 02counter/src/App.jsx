import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter] = useState(0)
  

  let count = () =>{
    if(counter < 20 ){
    setCounter(counter + 1)
    console.log(counter + 1)
    }
  }

  let decrease = () => {
    if(counter > 0){
    setCounter(counter - 1)
    console.log(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter APP</h1> 
      <h3>{counter}</h3>
      <button onClick = {count} >Increase</button>
      <button onClick = {decrease}>Decrease</button>
    </>
  )
}

export default App
