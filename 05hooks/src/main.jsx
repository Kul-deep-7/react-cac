import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Fetch from './fetch.jsx'
import UR from './useReducer.jsx'
import Input from './Input.jsx'
import TodoUR from './todoUR.jsx'
import EvenOddPalindrome from './EvenOddPalindrome.jsx'
import CalculatorUI from './Calculator.jsx'

createRoot(document.getElementById('root')).render(
  
    <CalculatorUI />

)
