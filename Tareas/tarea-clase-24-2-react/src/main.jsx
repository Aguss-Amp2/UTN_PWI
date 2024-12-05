import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ContactsConTextProvider } from './Mensajes_List/TextContact.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ContactsConTextProvider>
            <App/>
        </ContactsConTextProvider>
    </BrowserRouter>
)
