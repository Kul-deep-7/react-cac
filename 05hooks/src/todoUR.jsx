import React from 'react'
import { useReducer } from 'react'

 function reduce(state,action){
        switch(action.type){
            case "ADD" : return [
                ...state, // spread operator to keep existing todos, if not used, the new todo will replace the old ones
                {
                    id  : Math.random(),
                    name  : action.storage
                }
            ]

            case "DELETE" : return state.filter(deleteTodo => deleteTodo.id !== action.deleteid) // this logic means Keep every todo whose id is NOT the one we clicked
            // filter out the todo with the id we want to delete

            default : return state;
        }
    }

export default function todoUR() {
    const [state, dispatch] = useReducer(reduce,[])
   

  return (
    <>
    <div>todoUR: {state.length}</div>
    ADD NEW TASK :              {/*e is the event object, we get the value from input onBlur event*/}
   <input type = 'text' onBlur={(e)=>
   dispatch({
    type: 'ADD', 
    storage : e.target.value
    })}/> {/*storage: we get the value from input n store it in storage, storage 
    dispatch is just a function where we pass an object (with a type and storage (can pass more key/value pairs)) 
    so the reducer knows what to do. */}

    <ul>
        {state.map(todo=><li key={todo.id}>{todo.name}
           <span>
            <button style={{marginLeft: '10px'}} 
            onClick={()=> dispatch({type : "DELETE", deleteid: todo.id})}> {/*The DELETE button dispatches the clicked todo's id:*/}
               DELETE 
            </button> 
           </span>
        </li>)}
    </ul>
    </>
    
  )
}

/* Whatever I type in the input goes into the action (as payload).
   That payload is sent to the reducer → switch case "ADD".
   In "ADD", the spread operator (...state) keeps all the existing todos,
   and then the new todo (from payload) is added at the end.

   Example:
   state = ['milk']
   input = 'bread'
   After ADD → ['milk', 'bread']  

key is a unique identifier that helps React keep track of elements in a list, 
think key in map as ID cards, Without IDs, React only knows “first guy, second guy, third guy…”
With IDs, React knows “Kuldeep, Rahul, Simran…” — even if Rahul leaves, Simran is still Simran, not “second guy.”
   
________________________________________________________________________________________________________________________________________
DELETE logic (exact flow):

- The DELETE button dispatches the clicked todo's id:
  dispatch({ type: "DELETE", deleteid: todo.id })

- Reducer:
  case "DELETE":
    // Keep every todo whose id is NOT the one we clicked
    return state.filter((todo) => todo.id !== action.deleteid);

- Example:
  Before: [
    { id: 0.12, name: "milk" },
    { id: 0.45, name: "bread" },
    { id: 0.67, name: "butter" }
  ]
  Action: { type: "DELETE", deleteid: 0.45 }
  After:  [
    { id: 0.12, name: "milk" },
    { id: 0.67, name: "butter" }
  ]

Notes:
- filter() returns a NEW array (does not mutate state).
- Using Math.random() is okay for demos, but can collide;
  prefer crypto.randomUUID() or Date.now() for real apps.
*/



