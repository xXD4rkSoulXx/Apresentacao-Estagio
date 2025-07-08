import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import Index from './pages/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)
