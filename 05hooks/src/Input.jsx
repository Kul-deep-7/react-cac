import React from 'react';

export default function Input() {
  function goal() {
    const name = document.querySelector('input');
    alert(`${name.value}, Stop Eating Chinese!`);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        style={{ padding: "5px", marginRight: "5px" }}
      />
      <button
        onClick={goal}
        style={{ padding: "5px 10px", cursor: "pointer" }}
      >
        Submit
      </button>
    </div>
  );
}
