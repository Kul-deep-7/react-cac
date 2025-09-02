import { useState } from 'react'
import './App.css'

function submission(e){
  e.preventDefault() //first we prevent the default behaviour of form submission 
  const f = e.target // then we get the form element using e.target
  const form = new FormData(f) //formData is a built-in object that takes the form element as an argument and returns the form data as key-value pairs
  const formdata = Object.fromEntries(form)// we convert the form data into an object using Object.fromEntries() method. (a methoda that that converts a list of key–value pairs into an object.)
  console.log(formdata)

}
function App() {
 

  return (
    <>
      <form onSubmit={submission}>
        
        <fieldset>
          <legend>Personal Information</legend>

          <label>Full Name:</label><br />
          <input type="text" name="fullname" placeholder="Enter your name" required /><br /><br />

          <label>Email:</label><br />
          <input type="email" name="email" placeholder="Enter your email" required /><br /><br />

          <label>Age:</label><br />
          <input type="number" name="age" min="1" max="120" required /><br /><br />

          <label>Gender:</label><br />
          <input type="radio" name="gender" value="male" /> Male
          <input type="radio" name="gender" value="female" /> Female
          <input type="radio" name="gender" value="other" /> Other
        </fieldset>
        <br />


        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default App
