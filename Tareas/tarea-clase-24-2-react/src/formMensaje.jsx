import React, { useEffect, useRef, useState } from "react"
import getFormattedDateMMHHDDMM from "./helpers/getFormattedDate"
import { PiSmileyBold } from "react-icons/pi"
import { GoPlus } from "react-icons/go"
import { FaMicrophone } from "react-icons/fa"
import { IoSend } from "react-icons/io5"
import { MessajeList } from "./WhatsApp"


const TextArea = () => {
    const [ocultarMicrofono, setOcultarMicrofono] = useState(false)

    const handleClickTextarea = () => {
        setOcultarMicrofono(true)
    }

    const handleClickFueraTextarea = () => {
        setOcultarMicrofono(false)
    }

    const [mensajes, setMensajes] = useState([])
    const handleSubmitUncontrolledForm = (evento) => {
        evento.preventDefault()
        const messageJSX = evento.target
        const nuevoMensaje = {
            mensaje: messageJSX.text.value,
            hora: getFormattedDateMMHHDDMM()
        }

        setMensajes([...mensajes, nuevoMensaje])
        messageJSX.reset()
    }

    const contenedorRef = useRef(null)

    useEffect(() => {
        if (contenedorRef.current) {
            contenedorRef.current.scrollTop = contenedorRef.current.scrollHeight
        }
    }, [mensajes]);


    return (
        <div>
            <div className="chat-teclado">
                <div className="teclado-cont-icon">
                    <PiSmileyBold className="icon-teclado-smile" />
                    <GoPlus className="icon-teclado-plus" />
                    <div className="teclado">
                        <form
                            placeholder="Escribe un mensaje"
                            className="input-teclado"
                            onClick={handleClickTextarea}
                            onSubmit={handleSubmitUncontrolledForm}
                        >
                            <label htmlFor="text"></label>
                            <input type='text' id='text' name='text' placeholder='Escribe un mensaje' />
                        </form>
                    </div>
                    {!ocultarMicrofono && <FaMicrophone className="icon-teclado-micro" />}
                    {ocultarMicrofono && <IoSend className="icon-teclado-send" onClick={handleClickFueraTextarea} />}
                </div>
            </div>
            <div ref={contenedorRef}>
                {mensajes.map((ms, index) => (
                    <NewMessage key={index} mensaje={ms.mensaje} hora={ms.hora} />
                ))}
            </div>
        </div>
    )
}

const NewMessage = ({ mensaje, hora }) => {
    return (
        <div>
            <MessajeList texto={mensaje} hora={hora} emisor={'yo'} status={'no-visto'} />
        </div>
    )
}

export default TextArea
export { NewMessage }