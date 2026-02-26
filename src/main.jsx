import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './style/index.css'
import GetStarted from './pages/getStarted/getStarted.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GetStarted/>
  </BrowserRouter>
)
