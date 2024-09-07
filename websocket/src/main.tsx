import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import UserContextProvider from './Context/UserContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
   <BrowserRouter>

   <App />
  
  
   </BrowserRouter>
 

  </StrictMode>,
)
