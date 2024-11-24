import React from "react";
import './style.css'
import { Route, Routes } from "react-router-dom";
import WhatsApp from "./WhatsApp";
import ChatsList from "./Chats";
import Perfil from "./ImgPerfil";


function App() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<WhatsApp />} />
                <Route path="/home" element={<WhatsApp />} />
                <Route path="/home/:contact_id" element={<WhatsApp><ChatsList /><Perfil/></WhatsApp>} />
            </Routes>
        </div>
    )
}

export default App