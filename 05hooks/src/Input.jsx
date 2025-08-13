import React from 'react'

export default function Input() {
    function goal() {
        const name = document.querySelector('input')
        alert(`${name.value}, Goal reached!`);
    }

  return (
    <div>
        <input type="text" placeholder="Type something..." style= {{}}/>
        <button onClick={goal}>Submit</button>
    </div>
  )
}
