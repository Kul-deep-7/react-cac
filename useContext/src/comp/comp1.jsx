import { useContext } from 'react'
import { counterContext } from '../context'


export const Comp1 = () => {
    const {count, increment} = useContext(counterContext)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
    </div>
  )
}
