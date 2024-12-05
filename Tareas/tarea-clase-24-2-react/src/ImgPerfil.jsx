import React from "react"
import "./style.css"
import contacts from "./Mensajes_List/contacts"
import { useParams } from "react-router-dom";

const Perfil = () => {
    const { contact_id } = useParams(); // Captura el parámetro "id"

    // Busca el contacto según el id
    const contact_perfil = contacts.find(contact => contact.id == contact_id)

    // Si no se encuentra el contacto
    if(!contact_perfil) {
        return <div></div>
    }

    return(
        <div>
            <ImgPerfil avatar={contact_perfil.avatar} nombre={contact_perfil.nombre} emisor={"Tu"}/>
        </div>
    )
}

const ImgPerfil = ({ avatar, nombre, emisor }) => {
    return (
        <div className="Nombre-perfil-Chat">
            <img src={avatar} className="chat-perfil-foto" />
            <div className="chat-perfil-text">
                <span className="chat-text-name">{nombre}</span>
                <span className="chat-text-emi">{emisor}</span>
            </div>
        </div>
    )
}

export default Perfil