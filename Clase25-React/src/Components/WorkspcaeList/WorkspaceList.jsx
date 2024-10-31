import WorkspaceItem from '../WorkspaceItem/WorkspaceItem'
import './WorkspaceList.css'
import React from 'react'

const WorkspaceList = ({workspaces}) => {
    let workspacesListJSX = workspaces.map(
        (workspaces) => {
            return <WorkspaceItem 
                title={workspaces.title} 
                id={workspaces.id} 
                miembros={workspaces.miembros} 
                img={workspaces.img}
                key={workspaces.id}
            />
        }
    )
    return(
        <div>
            <h1>Tus espacios de trabajo</h1>
            <div>
                {workspacesListJSX}
            </div>
        </div>
    )
}

export default WorkspaceList