import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

   function run() {
     // can write setCount(prevCount => prevCount + 1) too n run() function in UseEffect
  }

   useEffect(()=>{
    setInterval(() => 
    setCount(a => {
      return a + 1})
      , 1000);

  },[]); //empty array means it will run only once when the component mounts
  
  //useEffect will make setInterval render only once when the component mounts
  //if we dont use useEffect, it will create a new interval every time the component re-renders
  //which will lead to multiple intervals running at the same time

  return (
    <>
      <h1>count:{count}</h1>
      
    </>
  )
}

export default App
