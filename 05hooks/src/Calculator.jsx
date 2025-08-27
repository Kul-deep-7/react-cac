import React from "react";
import { useState } from "react";

export default function CalculatorUI() {
     const[value , SetValue] = useState("")


  const btnStyle = {
    height: "56px",
    border: "none",
    borderRadius: "12px",
    background: "#2a2e39",
    color: "#eaeaea",
    fontSize: "18px",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        width: "320px",
        margin: "24px auto",
        padding: "16px",
        borderRadius: "16px",
        background: "#111217",
        fontFamily: "system-ui, sans-serif",
        color: "#f7f7f7",
      }}
    >
      {/* Display */}
      <div 
        style={{
          height: "72px",
          padding: "12px 16px",
          marginBottom: "16px",
          borderRadius: "12px",
          background: "#1a1c23",
          fontSize: "36px",
          lineHeight: "48px",
          textAlign: "right",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </div>

     

      {/* Buttons grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        <button style={btnStyle} onClick={(e)=>SetValue("")} >AC</button>
        <button style={btnStyle} onClick={(e)=>SetValue(value.slice(0,-1))}>DEL</button>
        <button style={btnStyle}value="%" onClick={(e)=>SetValue(value + e.target.value)}>%</button>
            <button style={{ ...btnStyle, background: "#52394f" }}value="/" onClick={(e)=>SetValue(value + e.target.value)}>÷</button>

      
        <button style={btnStyle} value="7" onClick={(e)=>SetValue(value + e.target.value) }>7</button>
        <button style={btnStyle}value="8" onClick={(e)=>SetValue(value + e.target.value) }>8</button>
        <button style={btnStyle}value="9" onClick={(e)=>SetValue(value + e.target.value) }>9</button>
        <button style={{ ...btnStyle, background: "#52394f" }}value="*" onClick={(e)=>SetValue(value + e.target.value) }>×</button>

        <button style={btnStyle}value="4" onClick={(e)=>SetValue(value + e.target.value) }>4</button>
        <button style={btnStyle}value="5" onClick={(e)=>SetValue(value + e.target.value) }>5</button>
        <button style={btnStyle}value="6" onClick={(e)=>SetValue(value + e.target.value) }>6</button>
        <button style={{ ...btnStyle, background: "#52394f" }}value="-" onClick={(e)=>SetValue(value + e.target.value) }>−</button>

        <button style={btnStyle}value="1" onClick={(e)=>SetValue(value + e.target.value) }>1</button>
        <button style={btnStyle}value="2" onClick={(e)=>SetValue(value + e.target.value) }>2</button>
        <button style={btnStyle}value="3" onClick={(e)=>SetValue(value + e.target.value) }>3</button>
        <button style={{ ...btnStyle, background: "#52394f" }}value="+" onClick={(e)=>SetValue(value + e.target.value) }>+</button>

        <button style={{ ...btnStyle, gridColumn: "span 2" }}value="0" onClick={(e)=>SetValue(value + e.target.value) }>0</button>
        <button style={btnStyle}value="." onClick={(e)=>SetValue(value + e.target.value) }>.</button>
        <button style={{ ...btnStyle, background: "#335eeb", fontWeight: "600" }}value="=" onClick={(e)=>SetValue(eval(value)) }>=</button>
      </div>
    </div>
  );
}

    
// Mistake: Initially value was stored as a number instead of string
// Problem: eval() and string operations like slice() only work properly on strings
// Fix: Make sure useState("") is used (string type), not useState(0) or useState([])
// "DEL" removes the last character of the current input
// Uses .slice(0, -1) → takes the string from start till second last character
// Example: "1234".slice(0,-1) → "123"
// "C" clears the entire input
// Just setValue("") → resets the input to empty string
// "=" evaluates the expression using eval()
// eval() takes a string expression and computes its value