import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProjetoReact from './ProjetoReact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjetoReact />
  </StrictMode>,
)
