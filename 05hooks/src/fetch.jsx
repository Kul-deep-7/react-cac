import React from 'react'
import { useState, useEffect } from 'react'


export default function Fetch() {

    const[users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((data)=>setUsers(data))
    }, []);

  return (
    <div>
        <ul>
            {users.map( user =>(
                <li key ={user.id}>
                    {user.name} - {user.email}
                </li>
            ))}
        </ul>
    </div>
  )
}
