import { Link } from 'react-router-dom'
import './WorkspaceItem.css'
import React from 'react'

const WorkspaceItem = ({img, title, miembros, id}) => {
    return(
        <div className='works'>
            <img src={img}/>
            <h2>{title}</h2>
            <span>Hay {miembros.length} miembros</span>
            <Link to={'/workspace/' + id}>Ir al espacio de trabajo</Link>
        </div>
    )
}
//SPA single page application
export default WorkspaceItem