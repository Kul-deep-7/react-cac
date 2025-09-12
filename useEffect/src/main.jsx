import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import ToggleformUseEffect from './toggleformUseEffect.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleformUseEffect />
  </StrictMode>,
)
