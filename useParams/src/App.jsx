import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Products from '../src/Products.jsx'

function Home(){
  return <h1> HELLO </h1>
}

export default function App() {
  return (
    <>
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link> &nbsp;
      <Link to="/Products/Laptop">Laptop</Link>&nbsp;
      <Link to="/Products/Mobile">Mobile</Link>&nbsp;
      <Link to="/Products/Tablet">Tablet</Link>&nbsp;
      <Link to="/Products/Monitor">Monitor</Link>&nbsp;


    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<Products />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

/* 
<Route path="/products/:id" element={<Products />} />
:id is a dynamic placeholder in the URL.
React Router will match any URL like /products/Laptop, /products/Mobile, etc., and fill the id parameter with whatever is in that part of the URL.

<Link to="/Products/Laptop">Laptop</Link>
When clicked, the URL changes to /Products/Laptop.
React Router sees this matches /products/:id route

const { id } = useParams();
React Router extracts id from the URL
For /products/Laptop, id = "Laptop".


Click "Laptop" Link 
→ URL: /products/Laptop 
→ Route matches "/products/:id" 
→ Products component renders 
→ useParams() returns {id: "Laptop"} id is now Laptop.
→ const {id} = useParams() assigns id = "Laptop"
→ category[id] becomes category["Laptop"]  
→ category["Laptop"] finds the key "Laptop" in the category object
→ Display product details

 The URL parameter id value must exactly match the object key names 
*/
