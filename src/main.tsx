import { StrictMode }

 from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
let a=45;
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
