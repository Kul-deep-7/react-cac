import { useState } from 'react'
import './App.css'
import { CounterContext } from './context'
import Comp11 from './comp/Comp11'


function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  return (
   <>
   <CounterContext.Provider value ={{count, increment}}>
    <Comp11 />
   </CounterContext.Provider>
   </>
  )
}

export default App
