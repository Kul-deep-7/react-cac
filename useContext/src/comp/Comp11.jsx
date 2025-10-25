import { useContext } from 'react'
import { CounterContext } from '../context'

const Comp11 = () => {
    const {count, increment} = useContext(CounterContext)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
    </div>
  )
}


export default Comp11