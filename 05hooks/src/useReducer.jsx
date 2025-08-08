import React from 'react'
import { useReducer } from 'react'

export default function uR() {
    const [state, dispatch] =  useReducer(reducer, 0); //0 is the initial state

//reduce is a function that takes the current state and an action, and returns a new state

    function reducer(state, action){
        if(action.type === 'INCREMENT'){
            return state + 1;
        }
        if(action.type === 'DECREMENT'){
            return state - 1;
        }
    }

/*useReducer as a fancy version of useState—but it’s more organized when your state 
changes are complex or have multiple types of actions.

HERE'S HOW IT WORKS:

state = current data (like useState)
dispatch = the “messenger” that sends an action to the reducer
action.type = tells the reducer what kind of change to make
reducer function = contains all the rules for changing the state


*/
  return (
    <>
    <h1>COUNT:{state}</h1>
    <button onClick={()=>dispatch({type: "INCREMENT"})}>INCREMENT</button>
        <button onClick={()=>dispatch({type: "DECREMENT"})}>DECREMENT</button>

    </>
  )
}
