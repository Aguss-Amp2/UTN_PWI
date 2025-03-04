import React from "react"
import "./global.css"

const ChannelScreen = () => {
    return (
        <div className="content-channel">
            <aside className="channel-aside">
                <span>hola</span>
            </aside>
            <div className="chat">

            </div>
            <div className="box-input-teclado">
                <input
                    type="text"
                    placeholder="Escribe un mensaje..."
                />
                <button>Enviar</button>
            </div>
        </div>
    )
}

export default ChannelScreen