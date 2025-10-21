import React from 'react'
import { useParams } from 'react-router-dom'

export default function Products() {

    const category = {
                Laptop: {id: 1, name : "Laptop", price: 45000},
        Mobile: {id: 2, name : "Mobile", price: 25000},
        Tablet: {id: 3, name : "Tablet", price: 15000},
        Monitor:{id: 4, name : "Monitor", price: 10000}
}


    const {id} = useParams();
    const names = category[id]

  return (
    <div>
        <h1> Product Details </h1>
        <p>Product ID: {names.id}</p>
        <p>Product NAME: {names.name}</p>
        <p>Product PRICE: {names.price}</p>
    </div>
  )
}
