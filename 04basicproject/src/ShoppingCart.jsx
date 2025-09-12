import React, {useState} from 'react'

export default function ShoppingCart() {
    const [items, setItems] = useState([]) //array to hold items in cart
    const [input, setInput] = useState("") //state to hold current input value


    function inputItems(e){
        setInput(e.target.value)
    }

    function addItems(e){
        e.preventDefault() // prevent page refresh on form submit

        const newItem = { // create new item object with unique id and name where the input is stored
        id: Date.now(),   // give each item a unique id
        name: input
        }

        setItems([...items, newItem]) // setItems is used to update the items array by adding the input via newItem object 
        
        setInput('') // clear the input field after adding the item
        console.log(items)
    }

    function DeleteButton(id){
        setItems(items.filter(item => item.id !== id)) 
        
        /* 
        items.filter(...) 
        Go through every item in the list.
        Keep only the ones where the condition is true.

        The condition here is: item.id !== id
        “Is this item’s id NOT equal to the id I want to delete?”
        If yes → keep it.
        If no → throw it away.

        then update it with setItems
        */
    }

  return (
    <div>
        <h1>Shopping Cart</h1>
        <br />
        <form onSubmit={addItems}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <input type="text" value={input} placeholder="Items..." onChange={inputItems}/>
            <button>Add</button>
        </div>
        </form>
        <div>
            {items.map((item , index)=>    //all the input is stored in items array, now we use map on it (remember we created an object with id and name where input is stored in name)
            <li key={item.id}>{item.name}  {/* item.name & item.id are the name n id stored in obj */}
            <button onClick={()=>DeleteButton(item.id)}>Delete</button>
            </li>
            )}                                       {/* items.map(item => item) raw version ahah*/}
            

        </div>
        
        

    </div>
  )
}
