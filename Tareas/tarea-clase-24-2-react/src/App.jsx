import React from "react"
import './style.css'
import { MdChat, MdOutlineGroups } from "react-icons/md";
import { SiCircle } from "react-icons/si";
import { RiChatVoiceLine, RiChatFollowUpLine } from "react-icons/ri";
import { IoSettingsOutline, IoSearchOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";

function App() {
  return (
    <div className="padre">
      <aside className="aside-container">
        <div className="top-aside">
          <button className="caja-icon"><MdChat className="icon"/></button>
          <button className="caja-icon"><SiCircle className="icon"/></button>
          <button className="caja-icon"><RiChatVoiceLine className="icon"/></button>
          <button className="caja-icon"><MdOutlineGroups className="icon"/></button>
        </div>
        <div className="bottom-aside">
          <button className="caja-icon"><IoSettingsOutline className="icon"/></button>
          <button><img src="https://ca.slack-edge.com/T07EJ2FLZ2R-U07EQ1QMU4D-ee680d421008-48" alt="Foto Perfil" className="img-perfil"/></button>
        </div>
      </aside>
      <header className="header-container">
        <div className="container-top">
          <h2 className="title-text">Chats</h2>
          <div className="container-top-button">
            <button className="caja-icon"><RiChatFollowUpLine className="icon"/></button>
            <button className="caja-icon"><SlOptionsVertical className="icon-option"/></button>
          </div>
        </div>
        <div className="container-search">
          <IoSearchOutline />
          <span>Buscar</span>
        </div>
        <nav className="container-nav">
          <ul className="cont-ul">
            <li className="caja-li li-select">Todos</li>
            <li className="caja-li">No Leidos</li>
            <li className="caja-li">Favoritos</li>
            <li className="caja-li">Grupos</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

const Chats = () =>{

}

export default App