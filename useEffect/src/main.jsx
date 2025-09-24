import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import ToggleformUseEffect from './toggleformUseEffect.jsx';
import RandomJokes from './RandomJokes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RandomJokes/>
  </StrictMode>,
)
