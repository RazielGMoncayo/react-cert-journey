import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//? Creates the React root and connects the app to the HTML element with id="root".

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Development tool that helps detect potential problems by performing extra checks. */}
    <App />
  </StrictMode>,
)