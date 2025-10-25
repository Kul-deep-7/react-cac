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

/*
first we create a Context object using createContext() in context.js file.
Think of it like a “shared data channel” React can read/write from anywhere.

Then, in App.jsx, we use CounterContext.Provider to wrap the part of our app that needs access to this shared data.
Think of it like a “shared data channel” React can read/write from anywhere.(here: {count, increment}).
Any component inside this provider tree can read those values.
So Comp11 can now access count and increment through context.

Then, in Comp11 we use useContext(CounterContext) to consume that shared data.
const { count, increment } = useContext(CounterContext);
This gives us direct access to count and increment without needing to pass them down as props.

createContext() → sets up the shared data channel.
Provider → makes the data available to all child components.
useContext() → allows components to read from that shared data channel.
This pattern helps avoid “prop drilling” where you’d have to pass props through many layers of components unnecessarily.
*/
