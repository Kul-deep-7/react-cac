import React, {useState} from 'react'


export default function Formhandlingtwo() {
    const[formdata, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        gender: ""
    })

    function submission(e){
    const value = e.target.value;
    const name = e.target.name; // get the name attribute of the input field that triggered the event
    setFormData({       
        ...formdata, //copies all the previous form values (spread operator). Without this, you’d overwrite the entire object each time.
        [name]: value //this is not array, its a dynamic key name. this will give us o/p as If name = "email", then make { email: "test@gmail.com" }.
    })

    //setFormData is used to update the formdata state. We use the spread operator to copy the existing formdata (if we dont use spread operator the previous data will be lost)
    //and then we update the specific field that triggered the event using [name]: value syntax.

    /*name tells WHERE to update.
    value tells WHAT to put there.
    Spread (...) keeps the old stuff safe.*/

}

function handleSubmit(e) {
    e.preventDefault(); // stop page refresh
    console.log(formdata); // check collected data in console (formdata is useState variable)
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        
        <fieldset>
          <legend>Personal Information</legend>

          <label>Full Name:</label><br />
          <input type="text" name="fullname" placeholder="Enter your name" required onChange={submission} /><br /><br />

          <label>Email:</label><br />
          <input type="email" name="email" placeholder="Enter your email" required onChange={submission}/><br /><br />

          <label>Age:</label><br />
          <input type="number" name="age"  min="1" max="120" required onChange={submission}/><br /><br />

          <label>Gender:</label><br />
          <input type="radio" name="gender" value="male" onChange={submission}/> Male
          <input type="radio" name="gender" value="female"onChange={submission} /> Female
          <input type="radio" name="gender" value="other" onChange={submission}/> Other
        </fieldset>
        <br />


        <input type="submit" value="Submit" />
      </form>
      <div>
        <h2>Form data</h2>
        <p>Name: {formdata.fullname}</p>
        <p>Email: {formdata.email}</p>
        <p>Age: {formdata.age}</p>
        <p>Gender: {formdata.gender}</p>
      </div>
    </div>
  )
}
