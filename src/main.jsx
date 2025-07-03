import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MessagesContextProvider from './Context/MessagesContext.jsx'
import { BrowserRouter } from 'react-router'
import ContactContextProvider from './Context/ContactContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContactContextProvider>
      <MessagesContextProvider >
        <App />
      </MessagesContextProvider>
    </ContactContextProvider>
  </BrowserRouter>  
)
