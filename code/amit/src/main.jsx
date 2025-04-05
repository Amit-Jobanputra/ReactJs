import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LiveExample } from './LiveExample.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <LiveExample /> */}
  </StrictMode>,
)
