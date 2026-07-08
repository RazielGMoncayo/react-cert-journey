import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

//? creatRoot - Creates the React root and connects the app to the HTML element with id="root".

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Stric Mode - Development tool that helps detect potential problems by performing extra checks. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)