import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PLayerContextProvider from './context/PlayerContext.jsx'
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PLayerContextProvider>
          <App />
        </PLayerContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
